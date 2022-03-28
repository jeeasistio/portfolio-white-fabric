import { Box } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Gallery, { TGallery } from '../../components/Gallery/Gallery'
import NextWork from '../../components/NextWork/NextWork'
import Layout from '../../components/UtilityComponents/Layout'
import WorkDetails from '../../components/WorkDetails/WorkDetails'
import WorkIntro from '../../components/WorkIntro/WorkIntro'
import client from '../../lib/sanityClient'

interface Work {
  title: string
  image: string
  about: string
  gallery: TGallery
  description: {
    text: string
    image: string
  }
  _id: string
}

interface NextWork {
  title: string
  image: string
  _id: string
}

interface Props {
  work: string
  nextWork: string
}

const work: NextPage<Props> = ({ work, nextWork }) => {
  const parsedWork: Work = JSON.parse(work)
  const parsedNextWork: NextWork = JSON.parse(nextWork)
  const { title, image, about, gallery, description } = parsedWork
  const { title: nextTitle, image: nextImage, _id: nextID } = parsedNextWork

  return (
    <Box>
      <Head>
        <title>Work</title>
      </Head>

      <Layout>
        <WorkIntro title={title} image={image} about={about} />
        <Gallery images={gallery} />
        <WorkDetails details={description.text} image={description.image} />
        <NextWork title={nextTitle} image={nextImage} id={nextID} />
      </Layout>
    </Box>
  )
}

export default work

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const idsQuery = `*[_type == "project"] {
      _id
    } | order(_createdAt desc)
  `

  const projectIDs: { _id: string }[] = await client.fetch(idsQuery)

  const getProjectIndex = () =>
    projectIDs.findIndex(({ _id }) => _id === params?.id)
  const getNextProjectIndex = () => (getProjectIndex() + 1) % projectIDs.length
  const getNextProjectId = () => projectIDs[getNextProjectIndex()]._id

  interface NextWork {
    title: string
    image: string
    _id: string
  }

  const nextWorkQuery = `*[_type == "project" && _id == $id] {
    title,
    "image": cover.asset->url,
    _id
  }[0]
`

  const nextWorkParams = { id: getNextProjectId() }

  type GetNextWorkResult = NextWork

  const nextWork: GetNextWorkResult = await client.fetch(
    nextWorkQuery,
    nextWorkParams
  )

  interface Work {
    title: string
    image: string
    about: string
    gallery: TGallery
    description: {
      text: string
      image: string
    }
    nextWork: {
      title: string
      image: string
      _id: string
    }
    _id: string
  }

  type GetWorkResult = Work

  const workQuery = `*[_type == "project" && _id == $id] {
      title,
      "image": cover.asset->url,
      about,
      "gallery": gallery[].asset->url,
      "description": {
        "text": description.text,
        "image": description.image.asset->url
      },
      _id
    }[0]
  `

  const workParams = { id: params?.id }

  const work: GetWorkResult = await client.fetch(workQuery, workParams)

  return {
    props: { work: JSON.stringify(work), nextWork: JSON.stringify(nextWork) }
  }
}

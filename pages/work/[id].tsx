import { Box } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const parsedWork: Work = JSON.parse(work)
  const parsedNextWork: NextWork = JSON.parse(nextWork)
  const { title, image, about, gallery, description } = parsedWork
  const { title: nextTitle, image: nextImage, _id: nextID } = parsedNextWork

  return (
    <Box>
      <Head>
        <title>Work</title>
      </Head>

      <AnimatePresence exitBeforeEnter>
      <Layout key={router.asPath}>
        <WorkIntro title={title} image={image} about={about} />
        <Gallery images={gallery} />
        <WorkDetails details={description.text} image={description.image} />
        <NextWork title={nextTitle} image={nextImage} id={nextID} />
      </Layout>
      </AnimatePresence>
    </Box>
  )
}

export default work

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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

  interface NextWork {
    title: string
    image: string
    _id: string
  }

  interface ProjectID {
    _id: string
  }

  type GetWorkResult = Work
  type GetNextWorkResult = NextWork
  type GetProjectIDs = ProjectID[]

  const idsQuery = `*[_type == "project"] {
      _id
    } | order(_createdAt desc)
  `
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
  const nextWorkQuery = `*[_type == "project" && _id == $id] {
    title,
    "image": cover.asset->url,
    _id
  }[0]
  `

  const projectIDs: GetProjectIDs = await client.fetch(idsQuery)
  const getProjectIndex = () =>
    projectIDs.findIndex(({ _id }) => _id === params?.id)
  const getNextProjectIndex = () => (getProjectIndex() + 1) % projectIDs.length
  const getNextProjectId = () => projectIDs[getNextProjectIndex()]._id

  const workParams = { id: params?.id }
  const nextWorkParams = { id: getNextProjectId() }

  const work: GetWorkResult = await client.fetch(workQuery, workParams)
  const nextWork: GetNextWorkResult = await client.fetch(
    nextWorkQuery,
    nextWorkParams
  )

  return {
    props: { work: JSON.stringify(work), nextWork: JSON.stringify(nextWork) }
  }
}

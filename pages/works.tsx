import { Box } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/UtilityComponents/Layout'
import WorksList, { Work } from '../components/Works/WorksList'
import client from '../lib/sanityClient'

interface Props {
  works: string
}

const Works: NextPage<Props> = ({ works }) => {
  const parsedWorks: Work[] = JSON.parse(works)

  return (
    <Box>
      <Head>
        <title>Works</title>
      </Head>

      <Layout>
        <WorksList works={parsedWorks} />
      </Layout>
    </Box>
  )
}

export default Works

export const getServerSideProps: GetServerSideProps = async () => {
  type GetWorksListResult = { name: string; image: string; _id: string }[]

  const query = `*[_type == "project"] {
    title,
    "image": cover.asset->url,
    _id
  } | order(_createdAt desc)
`

  const works: GetWorksListResult = await client.fetch(query)

  return {
    props: { works: JSON.stringify(works) }
  }
}

import { Box } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/UtilityComponents/Layout'
import WorksList from '../components/Works/WorksList'
import getAPIUrl from '../lib/getAPIUrl'
import { getProjectCovers, Project, ProjectCover } from '../lib/getProjects'

interface Props {
  covers: string
}

const Works: NextPage<Props> = ({ covers }) => {
  const parsedCovers: ProjectCover[] = JSON.parse(covers)
  const simplifiedCovers = parsedCovers.map((cov) => ({
    name: cov.attributes.name,
    image: `${getAPIUrl()}${
      cov.attributes.cover.data.attributes.formats.medium.url
    }`
  }))

  return (
    <Box>
      <Head>
        <title>Works</title>
      </Head>

      <Layout>
        <WorksList works={simplifiedCovers} />
      </Layout>
    </Box>
  )
}

export default Works

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getProjectCovers()

  return {
    props: {
      covers: JSON.stringify(res.data)
    }
  }
}

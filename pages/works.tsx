import { Box } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/UtilityComponents/Layout'
import WorksList, { Work } from '../components/Works/WorksList'
import getAPIUrl from '../lib/getAPIUrl'
import { getProjectCovers, ProjectCoverResult } from '../lib/getProjects'

interface Props {
  covers: string
}

const Works: NextPage<Props> = ({ covers }) => {
  const parsedCovers: Work[] = JSON.parse(covers)

  return (
    <Box>
      <Head>
        <title>Works</title>
      </Head>

      <Layout>
        <WorksList works={parsedCovers} />
      </Layout>
    </Box>
  )
}

export default Works

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getProjectCovers()

  const simplifiedCovers = res.data.map((cov) => ({
    name: cov.attributes.name,
    image: `${getAPIUrl()}${
      cov.attributes.cover.data.attributes.formats.medium.url
    }`
  }))

  return {
    props: {
      covers: JSON.stringify(simplifiedCovers)
    }
  }
}

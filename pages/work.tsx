import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import NextWork from '../components/NextWork/NextWork'
import Layout from '../components/UtilityComponents/Layout'
import WorkDetails from '../components/WorkDetails/WorkDetails'
import WorkIntro from '../components/WorkIntro/WorkIntro'

const work = () => {
  return (
    <Box>
      <Head><title>work</title></Head>

      <Layout>
        <WorkIntro />
        <Gallery />
        <WorkDetails />
        <NextWork />
      </Layout>
    </Box>
  )
}

export default work
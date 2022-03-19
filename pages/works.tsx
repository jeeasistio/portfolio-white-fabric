import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/UtilityComponents/Layout'
import WorksList from '../components/Works/WorksList'

const Works = () => {
  return (
    <Box>
      <Head>
        <title>Works</title>
      </Head>

      <Layout>
        <WorksList />
      </Layout>
    </Box>
  )
}

export default Works

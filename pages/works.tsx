import { Box } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/UtilityComponents/Layout'
import WorksList from '../components/Works/WorksList'

const Works: NextPage = () => {
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

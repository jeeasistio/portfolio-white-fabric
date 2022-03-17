import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import Layout from '../components/UtilityComponents/Layout'
import { SxObject } from '../interfaces/interfaces'

const sx: SxObject = {
  gridCtn: {
    display: 'grid'
  }
}

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </Box>
  )
}

export default Home

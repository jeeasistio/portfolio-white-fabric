import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Manifesto from '../components/Manifesto/Manifesto'
import OurWorks from '../components/OurWorks/OurWorks'
import Layout from '../components/UtilityComponents/Layout'
import WeBuild from '../components/WeBuild/WeBuild'
import WhyChoose from '../components/WhyChoose/WhyChoose'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Hero />
        <About />
        <WhyChoose />
        <Manifesto />
        <WeBuild />
        <OurWorks />
      </Layout>
    </Box>
  )
}

export default Home

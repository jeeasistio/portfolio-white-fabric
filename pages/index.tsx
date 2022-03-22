import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Manifesto from '../components/Manifesto/Manifesto'
import OurWorks from '../components/OurWorks/OurWorks'
import Layout from '../components/UtilityComponents/Layout'
import WeBuild from '../components/WeBuild/WeBuild'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import getProductsList, { Project } from '../lib/getProductsList'

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    const func = async () => {
      const res = await getProductsList()
      setProjects(res)
    }
    func()
  }, [])

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
        {projects !== null && (
          <OurWorks
            images={projects
              .slice(0, 5)
              .map((work) => work.image.formats.large.url)}
          />
        )}
      </Layout>
    </Box>
  )
}

export default Home

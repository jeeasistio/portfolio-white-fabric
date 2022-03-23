import { Box } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Manifesto from '../components/Manifesto/Manifesto'
import OurWorks from '../components/OurWorks/OurWorks'
import Layout from '../components/UtilityComponents/Layout'
import WeBuild from '../components/WeBuild/WeBuild'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import getAPIUrl from '../lib/getAPIUrl'
import { getProjectCovers, ProjectCover } from '../lib/getProjects'

interface Props {
  covers: string
}

const Home: NextPage<Props> = ({ covers }) => {
  const parsedCovers: ProjectCover[] = JSON.parse(covers)
  const images = parsedCovers.map(
    (cov) =>
      `${getAPIUrl()}${cov.attributes.cover.data.attributes.formats.large.url}`
  )

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
        <OurWorks images={images} />
      </Layout>
    </Box>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getProjectCovers()

  return {
    props: {
      covers: JSON.stringify(res.data)
    }
  }
}

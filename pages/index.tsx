import { Box } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Manifesto from '../components/Manifesto/Manifesto'
import OurWorks, { TOurWorksImages } from '../components/OurWorks/OurWorks'
import OurWorksImages from '../components/OurWorks/OurWorksImages'
import Layout from '../components/UtilityComponents/Layout'
import WeBuild from '../components/WeBuild/WeBuild'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import getAPIUrl from '../lib/getAPIUrl'
import { getProjectCovers, ProjectCoverResult } from '../lib/getProjects'

interface Props {
  images: string
}

const Home: NextPage<Props> = ({ images }) => {
  const parsedImages: TOurWorksImages = JSON.parse(images)

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
        <OurWorks images={parsedImages} />
      </Layout>
    </Box>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getProjectCovers()

  const images = res.data
    .map(
      (cov) =>
        `${getAPIUrl()}${
          cov.attributes.cover.data.attributes.formats.large.url
        }`
    )
    .slice(0, 5) as TOurWorksImages

  return {
    props: {
      covers: JSON.stringify(images)
    }
  }
}

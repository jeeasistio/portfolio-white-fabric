import { Box } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Manifesto from '../components/Manifesto/Manifesto'
import OurWorks, { TOurWorksImages } from '../components/OurWorks/OurWorks'
import Layout from '../components/UtilityComponents/Layout'
import WeBuild from '../components/WeBuild/WeBuild'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import client from '../lib/sanityClient'

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
  type GetCoverImagesResult = { url: string }[]

  const query = `*[_type == "project"][0...5] {
    "url": cover.asset->url
  } | order(_createdAt desc)`

  const images: GetCoverImagesResult = await client.fetch(query)
  const flattenImages = images.map((img) => img.url)

  return {
    props: { images: JSON.stringify(flattenImages) }
  }
}

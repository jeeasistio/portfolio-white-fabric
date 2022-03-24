import { Box } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import NextWork from '../../components/NextWork/NextWork'
import Layout from '../../components/UtilityComponents/Layout'
import WorkDetails from '../../components/WorkDetails/WorkDetails'
import WorkIntro from '../../components/WorkIntro/WorkIntro'
import getAPIUrl from '../../lib/getAPIUrl'
import { getProject, Project } from '../../lib/getProjects'

interface Props {
  work: string
}

const work: NextPage<Props> = ({ work }) => {
  const { name, cover, about }: Project = JSON.parse(work)

  return (
    <Box>
      <Head>
        <title>{name}</title>
      </Head>

      <Layout>
        <WorkIntro
          title={name}
          image={`${getAPIUrl()}${cover.data.attributes.formats.large.url}`}
          about={about}
        />
        <Gallery />
        <WorkDetails />
        <NextWork />
      </Layout>
    </Box>
  )
}

export default work

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await getProject(params?.id as string)

  return {
    props: {
      work: JSON.stringify(res.data.attributes)
    }
  }
}

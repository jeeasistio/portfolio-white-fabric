import { Box } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/UtilityComponents/Layout'
import WorksList from '../components/Works/WorksList'
import getProductsList, { Project } from '../lib/getProductsList'

const Works = () => {
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
        <title>Works</title>
      </Head>

      <Layout>{projects !== null && <WorksList works={projects} />}</Layout>
    </Box>
  )
}

export default Works

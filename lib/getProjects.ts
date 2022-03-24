import axios from 'axios'
import getAPIUrl from './getAPIUrl'

export interface Project {
  id: number
  name: string
  about: string
  cover: StrapiImage
  description: {
    description_text: string
    description_image: StrapiImage
  }
}

interface StrapiImage {
  data: {
    attributes: {
      name: string
      alternativeText: string
      caption: string
      width: number
      height: number
      formats: StrapiImageFormats
    }
  }
}

interface ImageFormat {
  url: string
}

type StrapiImageFormats = Record<'small' | 'medium' | 'large', ImageFormat>

interface StrapiResult<T> {
  data: T
  error: {
    message: string
    name: string
    status: number
  }
}

export interface ProjectCoverResult {
  id: number
  attributes: Pick<Project, 'name' | 'cover'>
}

type GetProjectCoversResult = StrapiResult<ProjectCoverResult[]>

export const getProjectCovers = async () => {
  const apiUrl = getAPIUrl()

  const res = await axios.get<GetProjectCoversResult>(
    `${apiUrl}/api/projects?sort=createdAt:desc&fields=name&populate=cover`
  )

  return res.data
}

export interface StrapiProject {
  id: number
  attributes: Project
}

type GetProjectResult = StrapiResult<StrapiProject>

export const getProject = async (id: string) => {
  const apiUrl = getAPIUrl()

  const res = await axios.get<GetProjectResult>(
    `${apiUrl}/api/projects/${id}?populate=cover,description.image`
  )

  return res.data
}

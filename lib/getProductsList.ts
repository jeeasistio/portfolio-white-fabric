import getAPIURL from './getAPIURL'

export interface Project {
  id: number
  name: string
  about: string
  image: {
    formats: {
      medium: {
        url: string
      },
      large: {
        url: string
      }
    }
  }
  description: {
    description_text: string
    description_image: string
  }
}

const getProductsList = async (): Promise<Project[]> => {
  const apiUrl = getAPIURL()
  const res = await fetch(`${apiUrl}/projects?_sort=created_at:ASC`)

  return res.json() as unknown as Project[]
}

export default getProductsList

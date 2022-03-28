import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '0tndxgml',
  dataset: 'production',
  apiVersion: '2022-03-27',
  useCdn: true
})

export default client

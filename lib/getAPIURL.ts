const getAPIURL = (): string =>
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'


  export default getAPIURL
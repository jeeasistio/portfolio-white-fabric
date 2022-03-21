const getAPIURL = (): string =>
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337/admin'


  export default getAPIURL
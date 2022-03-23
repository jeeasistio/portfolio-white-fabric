/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_STRAPI_URL: 'https://builders-strapi.herokuapp.com'
  }
}

module.exports = nextConfig

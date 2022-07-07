import { Box } from '@mui/material'
import Head from 'next/head'
import Contact from '../components/Contact/Contact'
import Layout from '../components/UtilityComponents/Layout'

const ContactPage = () => {
    return (
        <Box>
            <Head>
                <title>Contact</title>
            </Head>

            <Layout>
                <Contact />
            </Layout>
        </Box>
    )
}

export default ContactPage

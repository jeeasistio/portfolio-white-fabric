import { Box } from '@mui/material'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { ChangeEvent, useState } from 'react'
import getTransition from '../../lib/getTransition'
import CubeButton from '../UtilityComponents/CubeButton'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import StyledTextField from '../UtilityComponents/StyledTextField'
import TextCtn from '../UtilityComponents/TextCtn'

const template = `
    'se se se se se s1 s1'
    'em em em em em em em'
    'nm nm nm nm nm nm nm'
    'ms ms ms ms ms ms ms'
    'ms ms ms ms ms ms ms'
    'st st st bt bt bt bt'
`

const ContactForm = () => {
    const [fields, setFields] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')

    const handleField = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFields((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async () => {
        setStatus('loading')

        try {
            await axios.post('/api/send-mail', fields)
            setStatus('success')
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <GridContainer templateAreas={template} areaName="fr">
            <GridItem areaName="se">
                <TextCtn
                    text="Send us a message"
                    variant="h5"
                    textStyle={{ fontWeight: '700' }}
                    animation="slide"
                    direction="down"
                />
            </GridItem>
            <GridItem areaName="em">
                <Box
                    component={motion.div}
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={getTransition()}
                >
                    <StyledTextField
                        label="Email"
                        onChange={handleField}
                        name="email"
                        disabled={status === 'loading'}
                    />
                </Box>
            </GridItem>
            <GridItem areaName="nm">
                <Box
                    component={motion.div}
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={getTransition()}
                >
                    <StyledTextField label="Name" onChange={handleField} name="name" disabled={status === 'loading'} />
                </Box>
            </GridItem>
            <GridItem areaName="ms">
                <Box
                    component={motion.div}
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    viewport={{ once: true }}
                    transition={getTransition()}
                >
                    <StyledTextField
                        label="Message"
                        onChange={handleField}
                        name="message"
                        disabled={status === 'loading'}
                    />
                </Box>
            </GridItem>
            <GridItem areaName="bt">
                <CubeButton text="Send" variant="h5" fontWeight="700" onClick={handleSubmit} />
            </GridItem>

            <GridItem areaName="st">
                <AnimatePresence exitBeforeEnter>
                    {status === 'loading' && (
                        <TextCtn
                            key="loading"
                            text="Sending Message..."
                            viewportMargin={0}
                            animation="slide"
                            direction="up"
                        />
                    )}

                    {status === 'success' && (
                        <TextCtn
                            key="success"
                            text="Message Sent"
                            viewportMargin={0}
                            animation="slide"
                            direction="up"
                        />
                    )}

                    {status === 'error' && (
                        <TextCtn
                            key="error"
                            text="Something went wrong"
                            viewportMargin={0}
                            animation="slide"
                            direction="up"
                        />
                    )}
                </AnimatePresence>
            </GridItem>
            <GridItem areaName="s1" />
        </GridContainer>
    )
}

export default ContactForm

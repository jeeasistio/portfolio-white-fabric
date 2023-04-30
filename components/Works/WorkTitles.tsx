import { Box, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

interface Props {
    title: string
}

const WorkTitles = ({ title }: Props) => {
    return (
        <GridItem
            areaName="wt"
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            <TextCtn
                text={title}
                variant="h2"
                animation="slide"
                textStyle={{ textAlign: 'center' }}
                viewportMargin={0}
                transitionProps={{ duration: 0.5 }}
            />
        </GridItem>
    )
}

export default WorkTitles

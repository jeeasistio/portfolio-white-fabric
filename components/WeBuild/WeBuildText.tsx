import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import getTransition from '../../lib/getTransition'
import GridItem from '../UtilityComponents/GridItem'

const words = 'We create places that connects, sustains & inspires one another'.split(' ')

const WeBuildText = () => {
    return (
        <GridItem areaName="tx" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap', p: 4 }}>
                {words.map((word, index) => (
                    <Stack key={index} direction="row" alignItems="center" sx={{ m: 1 }}>
                        {word.split('').map((letter, index) => (
                            <Typography
                                key={index}
                                variant="h3"
                                component={motion.h3}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ margin: '-25% 0%', once: true }}
                                transition={getTransition({ delay: Math.random() * (0.5 - 0.1) + 0.1 })}
                            >
                                {letter}
                            </Typography>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </GridItem>
    )
}

export default WeBuildText

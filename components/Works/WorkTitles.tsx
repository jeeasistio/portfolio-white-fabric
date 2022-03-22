import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'

interface Props {
  title: string
}

const WorkTitles = ({ title }: Props) => {
  return (
    <GridItem
      areaName="wt"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <Typography
        key={title}
        variant="h1"
        component={motion.h1}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{
          y: '-100%',
          opacity: 0,
          transition: {
            y: { type: 'spring', damping: 20, mass: 0.8, stiffness: 100 },
            opacity: { duration: 0.5 }
          }
        }}
        transition={{
          delay: 0.8,
          y: { type: 'spring', damping: 20, mass: 0.8, stiffness: 70 },
          opacity: { duration: 0.5 }
        }}
      >
        {title}
      </Typography>
    </GridItem>
  )
}

export default WorkTitles

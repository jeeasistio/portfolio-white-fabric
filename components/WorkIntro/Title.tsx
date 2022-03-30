import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import getTransition from '../../lib/getTransition'
import GridItem from '../UtilityComponents/GridItem'

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <GridItem areaName="wt">
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4
        }}
      >
        <Box sx={{ overflow: 'hidden' }}>
          <Typography
            component={motion.h1}
            variant="h1"
            initial={{ x: '-99%', rotate: '180deg' }}
            whileInView={{ x: '0%', transition: getTransition() }}
            viewport={{ once: true }}
            sx={{ writingMode: 'vertical-rl' }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Title

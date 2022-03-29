import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { getTextSlideVariant } from '../../lib/variants'
import GridItem from '../UtilityComponents/GridItem'

const TopText = () => {
  return (
    <GridItem
      areaName="tt"
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <Typography
          variant="h1"
          component={motion.h1}
          variants={getTextSlideVariant().down}
          initial="initial"
          animate="animate"
        >
          White
        </Typography>
      </Box>
    </GridItem>
  )
}

export default TopText

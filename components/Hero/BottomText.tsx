import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { getTextSlideVariant } from '../../lib/variants'
import GridItem from '../UtilityComponents/GridItem'

const BottomText = () => {
  return (
    <GridItem areaName="bt">
      <Box sx={{ overflow: 'hidden' }}>
        <Typography
          variant="h1"
          align="right"
          component={motion.h1}
          variants={getTextSlideVariant().up}
          initial="initial"
          animate="animate"
        >
          Fabric
        </Typography>
      </Box>
    </GridItem>
  )
}

export default BottomText

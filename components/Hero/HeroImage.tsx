import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const HeroImage = () => {
  return (
    <GridItem areaName="hi" sx={{ position: 'relative', overflow: 'hidden' }}>
      <ParallaxImage
        src="https://i.ibb.co/VpTpGM7/hero.jpg"
        alt="architecture"
      />
      <Box
        component={motion.div}
        initial={{ y: '-0%' }}
        animate={{ y: '-100%' }}
        transition={{
          type: 'spring',
          damping: 15,
          mass: 0.8,
          stiffness: 60,
          delay: 0.8
        }}
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '50%',
          backgroundColor: 'common.white'
        }}
      />
      <Box
        component={motion.div}
        initial={{ y: '-0%' }}
        animate={{ y: '100%' }}
        transition={{
          type: 'spring',
          damping: 15,
          mass: 0.8,
          stiffness: 60,
          delay: 0.8
        }}
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '50%',
          backgroundColor: 'common.white'
        }}
      />
    </GridItem>
  )
}

export default HeroImage

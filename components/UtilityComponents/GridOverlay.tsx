import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import getTransition from '../../lib/getTransition'
import { Direction, getOverlaySlideVariant } from '../../lib/variants'

const directions: Direction[] = ['up', 'down', 'left', 'right']

const GridOverlay = () => {
  const animationDirection =
    directions[Math.floor(Math.random() * directions.length)]

  return (
    <Box
      component={motion.div}
      variants={getOverlaySlideVariant()[animationDirection]}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-10%' }}
      transition={getTransition()}
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'common.white'
      }}
    />
  )
}

export default GridOverlay

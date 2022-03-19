import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const Image1 = () => {
  return (
    <GridItem areaName="im">
      <ParallaxImage src="manifesto.jpg" alt="architecture" />
    </GridItem>
  )
}

export default Image1

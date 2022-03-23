import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const Image1 = () => {
  return (
    <GridItem areaName='i1'>
      <ParallaxImage src="https://i.ibb.co/N27hWWW/about-1.jpg" alt="architecture" />
    </GridItem>
  )
}

export default Image1
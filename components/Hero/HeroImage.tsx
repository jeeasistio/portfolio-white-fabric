import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const HeroImage = () => {
  return (
    <GridItem areaName="hi">
      <ParallaxImage
        src="https://i.ibb.co/VpTpGM7/hero.jpg"
        alt="architecture"
      />
    </GridItem>
  )
}

export default HeroImage

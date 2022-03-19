import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const HeroImage = () => {
  return (
    <GridItem areaName='hi'>
      <ParallaxImage src="hero.jpg" alt="architecture" />
    </GridItem>
  )
}

export default HeroImage

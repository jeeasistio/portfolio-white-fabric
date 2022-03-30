import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const Image1 = () => {
  return (
    <GridItem areaName="i1">
      <GridOverlay />
      <ParallaxImage
        src="https://i.ibb.co/N27hWWW/about-1.jpg"
        alt="architecture"
      />
    </GridItem>
  )
}

export default Image1

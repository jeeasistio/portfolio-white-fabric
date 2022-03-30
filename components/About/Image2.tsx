import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const Image2 = () => {
  return (
    <GridItem areaName="i2">
      <GridOverlay />
      <ParallaxImage
        src="https://i.ibb.co/t2hQKQy/about-2.jpg"
        alt="architecture"
      />
    </GridItem>
  )
}

export default Image2

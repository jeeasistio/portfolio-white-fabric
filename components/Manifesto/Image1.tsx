import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const Image1 = () => {
  return (
    <GridItem areaName="im">
      <GridOverlay />
      <ParallaxImage src="https://i.ibb.co/LSRmLvJ/manifesto.jpg" alt="architecture" />
    </GridItem>
  )
}

export default Image1

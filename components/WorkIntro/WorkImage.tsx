import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

interface Props {
  image: string
}

const WorkImage = ({ image }: Props) => {
  return (
    <GridItem areaName="im">
      <GridOverlay />
      <ParallaxImage src={image} alt="architecture" />
    </GridItem>
  )
}

export default WorkImage

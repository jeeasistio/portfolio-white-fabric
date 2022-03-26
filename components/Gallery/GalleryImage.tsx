import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

interface Props {
  image: string
  areaName: string
}

const GalleryImage = ({ image, areaName }: Props) => {
  return (
    <GridItem areaName={areaName}>
      <ParallaxImage src={image} alt="architecture" />
    </GridItem>
  )
}

export default GalleryImage
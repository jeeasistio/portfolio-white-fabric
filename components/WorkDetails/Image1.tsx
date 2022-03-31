import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

interface Props {
  image: string
}

const Image1 = ({ image }: Props) => {
  return (
    <GridItem areaName="im">
      <GridOverlay />
      <ParallaxImage src={image} alt="architecture" />
    </GridItem>
  )
}

export default Image1

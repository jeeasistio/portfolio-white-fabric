import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

interface Props {
  image: string
}

const WorkImage = ({ image }: Props) => {
  console.log(image)

  return (
    <GridItem areaName="im">
      <ParallaxImage src={image} alt="architecture" />
    </GridItem>
  )
}

export default WorkImage
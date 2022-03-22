import React from 'react'
import getAPIURL from '../../lib/getAPIURL'
import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

interface Props {
  image: string
  areaName: string
}

const OurWorksImages = ({ image, areaName }: Props) => {
  return (
    <GridItem areaName={areaName}>
      <ParallaxImage src={`${getAPIURL()}${image}`} alt="architecture" />
    </GridItem>
  )
}

export default OurWorksImages

import React from 'react'
import CubeButton from '../UtilityComponents/CubeButton'
import GridItem from '../UtilityComponents/GridItem'

interface Props {
  link: string
}

const NextButton = ({ link }: Props) => {
  return (
    <GridItem areaName="bt" sx={{ p: 2 }}>
      <CubeButton text="Next Work" link href={link} variant="h2" />
    </GridItem>
  )
}

export default NextButton

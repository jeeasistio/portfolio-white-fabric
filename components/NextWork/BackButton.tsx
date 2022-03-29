import React from 'react'
import CubeButton from '../UtilityComponents/CubeButton'
import GridItem from '../UtilityComponents/GridItem'

const BackButton = () => {
  return (
    <GridItem areaName="bk">
      <CubeButton text="Back" link href="/works" variant="h2" />
    </GridItem>
  )
}

export default BackButton

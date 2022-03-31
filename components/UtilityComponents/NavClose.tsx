import React from 'react'
import CubeButton from './CubeButton'
import GridItem from './GridItem'

const NavClose = () => {
  return (
    <GridItem areaName="cl">
      <CubeButton text="Close" variant="h5" />
    </GridItem>
  )
}

export default NavClose

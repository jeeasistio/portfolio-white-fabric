import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const WeBuildText = () => {
  return (
    <GridItem
      areaName="tx"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <TextCtn
        text="We create places that connects, sustains & inspires one another"
        variant="h2"
      />
    </GridItem>
  )
}

export default WeBuildText

import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const Manifesto1 = () => {
  return (
    <GridItem areaName="m1" sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextCtn text="Think" variant="h2" animation='slide' />
    </GridItem>
  )
}

export default Manifesto1

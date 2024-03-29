import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const Manifesto3 = () => {
  return (
    <GridItem areaName="m3" sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextCtn text="Create" variant="h2" animation="slide" typographyProps={{ viewport: { once: true, margin: '15%' }}} />
    </GridItem>
  )
}

export default Manifesto3

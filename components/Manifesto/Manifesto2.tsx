import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const Manifesto2 = () => {
  return (
    <GridItem areaName="m2" sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextCtn
        text="Build"
        variant="h2"
        animation="slide"
        direction="left"
        textStyle={{ writingMode: 'vertical-rl' }}
      />
    </GridItem>
  )
}

export default Manifesto2

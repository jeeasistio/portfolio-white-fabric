import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const Manifesto2 = () => {
  return (
    <GridItem areaName="m2">
      <TextCtn
        text="Build"
        variant="h2"
        textStyle={{ writingMode: 'vertical-rl' }}
      />
    </GridItem>
  )
}

export default Manifesto2

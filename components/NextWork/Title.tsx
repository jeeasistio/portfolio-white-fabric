import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const Title = () => {
  return (
    <GridItem areaName="wt">
      <TextCtn
        text="White House"
        variant="h1"
        textStyle={{ writingMode: 'vertical-rl' }}
      />
    </GridItem>
  )
}

export default Title

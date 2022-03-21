import { Typography } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const Title = () => {
  return (
    <GridItem areaName="wt">
      <TextCtn
        text="Work Title"
        variant="h1"
        textStyle={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)'
        }}
      />
    </GridItem>
  )
}

export default Title

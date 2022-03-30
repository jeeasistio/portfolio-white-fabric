import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <GridItem areaName="wt">
      <TextCtn
        text={title}
        variant="h1"
        animation="slide"
        direction="left"
        textStyle={{ writingMode: 'vertical-rl' }}
      />
    </GridItem>
  )
}

export default Title

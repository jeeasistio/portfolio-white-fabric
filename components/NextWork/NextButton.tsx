import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

interface Props {
  link: string
}

const NextButton = ({ link }: Props) => {
  return (
    <GridItem areaName="bt">
      <TextCtn text="Next Work" variant="h2" />
    </GridItem>
  )
}

export default NextButton

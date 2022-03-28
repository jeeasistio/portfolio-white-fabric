import { Typography } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

interface Props {
  text: string
}

const Description = ({ text }: Props) => {
  return (
    <GridItem areaName="ds">
      <TextCtn text={text} variant="h5" />
    </GridItem>
  )
}

export default Description

import { Typography } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

interface Props {
  description: string
}

const Description = ({ description }: Props) => {
  return (
    <GridItem areaName="ds">
      <TextCtn text={description} />
    </GridItem>
  )
}

export default Description

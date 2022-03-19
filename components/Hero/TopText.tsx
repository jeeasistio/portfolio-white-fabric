import { Typography } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'

const TopText = () => {
  return (
    <GridItem areaName='tt' sx={{ display: 'flex', alignItems: 'flex-end'}}>
      <Typography variant="h1">Builders</Typography>
    </GridItem>
  )
}

export default TopText
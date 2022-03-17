import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'

const HeroImage = () => {
  return (
    <GridItem areaName='hi'>
      <Box
        sx={{ height: '100%', width: '100%', backgroundColor: 'success.main' }}
      />
    </GridItem>
  )
}

export default HeroImage
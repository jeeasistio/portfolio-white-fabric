import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'

const Image8 = () => {
  return (
    <GridItem areaName='i8'>
      <Box
        sx={{ height: '100%', width: '100%', backgroundColor: 'success.main' }}
      />
    </GridItem>
  )
}

export default Image8
import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'

const Image2 = () => {
  return (
    <GridItem areaName='i2'>
      <Box
        sx={{ height: '100%', width: '100%', backgroundColor: 'success.main' }}
      />
    </GridItem>
  )
}

export default Image2
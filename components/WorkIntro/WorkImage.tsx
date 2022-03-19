import { Box } from '@mui/material'
import React from 'react'
import GridItem from '../UtilityComponents/GridItem'

const WorkImage = () => {
  return (
    <GridItem areaName="im">
      <Box
        sx={{ height: '100%', width: '100%', backgroundColor: 'success.main' }}
      />
    </GridItem>
  )
}

export default WorkImage
import { Box, SxProps } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  areaName: string
  sx?: SxProps
}

const GridItem = ({ children, areaName, sx }: Props) => {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: 'common.white',
        color: 'common.black',
        gridArea: areaName,
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default GridItem

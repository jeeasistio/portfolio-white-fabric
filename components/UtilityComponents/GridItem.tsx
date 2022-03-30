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
        backgroundColor: 'common.white',
        color: 'common.black',
        gridArea: areaName,
        minHeight: '2rem',
        minWidth: '2rem',
        position: 'relative',
        overflow: 'hidden',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default GridItem

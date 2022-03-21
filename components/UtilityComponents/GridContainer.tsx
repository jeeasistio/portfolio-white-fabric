import { Box, SxProps } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  templateAreas: string
  areaName?: string
  sx?: SxProps
}

const GridContainer = ({ children, templateAreas, areaName, sx }: Props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 0.2,
        pb: 0.2,
        gridTemplateAreas: templateAreas,
        gridArea: areaName,
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default GridContainer

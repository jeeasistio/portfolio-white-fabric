import React from 'react'
import { Box } from '@mui/material'

interface Props {
  src: string
  alt: string
}

const ParallaxImage = ({ src, alt }: Props) => {
  return (
    <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <img
        src={src}
        alt="architecture"
        width={'100%'}
        height={'100%'}
        style={{ objectFit: 'cover' }}
      />
    </Box>
  )
}

export default ParallaxImage

import { Box, Typography, TypographyVariant } from '@mui/material'
import React from 'react'

interface Props {
  text: string
  variant?: TypographyVariant
}

const TextCtn = ({ text, variant }: Props) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant={variant && variant}>{text}</Typography>
    </Box>
  )
}

export default TextCtn

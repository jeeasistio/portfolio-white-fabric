import { Box, SxProps, Typography, TypographyVariant } from '@mui/material'
import React from 'react'

interface Props {
  text: string
  variant?: TypographyVariant
  textStyle?: SxProps
}

const TextCtn = ({ text, variant, textStyle }: Props) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4
      }}
    >
      <Typography variant={variant && variant} sx={textStyle}>{text}</Typography>
    </Box>
  )
}

export default TextCtn

import { Box, SxProps, Typography, TypographyVariant } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { Direction } from '../../lib/variants'

interface Props {
  text: string
  variant?: TypographyVariant
  textStyle?: SxProps
  animation?: 'opacity' | 'slide'
  direction?: Direction
}

const TextCtn = ({
  text,
  variant = 'body1',
  textStyle,
  animation = 'opacity',
  direction = 'up'
}: Props) => {
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
      <Typography component={motion.p} variant={variant} sx={textStyle}>
        {text}
      </Typography>
    </Box>
  )
}

export default TextCtn

import { Box, SxProps, Typography, TypographyVariant } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import {
  Direction,
  getOpacityVariant,
  getTextSlideVariant
} from '../../lib/variants'

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
  const animationType =
    animation === 'slide'
      ? getTextSlideVariant()[direction]
      : getOpacityVariant()

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
      <Box sx={{ overflow: 'hidden' }}>
        <Typography
          component={motion.p}
          variant={variant}
          variants={animationType}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true }}
          sx={textStyle}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default TextCtn

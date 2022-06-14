import { Box, SxProps, Typography, TypographyProps, TypographyVariant } from '@mui/material'
import { motion, MotionProps, Transition } from 'framer-motion'
import React from 'react'
import getTransition from '../../lib/getTransition'
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
  direction?: Direction,
  typographyProps?: TypographyProps & MotionProps
  transitionProps?: Transition
}

const TextCtn = ({
  text,
  variant = 'body1',
  textStyle,
  animation = 'opacity',
  direction = 'up',
  typographyProps,
  transitionProps
}: Props) => {
  const animationType =
    animation === 'slide'
      ? getTextSlideVariant()[direction]
      : getOpacityVariant(transitionProps)

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
        {/* @ts-ignore */}
        <Typography
          component={motion.p}
          variant={variant}
          variants={animationType}
          initial="initial"
          whileInView="animate"
          exit="exit"
          transition={getTransition(transitionProps)}
          viewport={{ once: true, margin: '-25% 0%' }}
          sx={textStyle}
          {...typographyProps}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default TextCtn

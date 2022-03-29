import { Variants } from 'framer-motion'
import getTransition from './getTransition'

export type Direction = 'up' | 'down' | 'right' | 'left'

const textSlide: { [P in Direction]: Variants } = {
  up: {
    initial: { y: '100%' },
    animate: { y: '0%', transition: getTransition() }
  },
  down: {
    initial: { y: '-100%' },
    animate: { y: '0%', transition: getTransition() }
  },
  right: {
    initial: { x: '-100%' },
    animate: { x: '0%', transition: getTransition() }
  },
  left: {
    initial: { x: '100%' },
    animate: { x: '0%', transition: getTransition() }
  }
}

export const getTextSlideVariant = () => {
  return textSlide
}

const overlaySlide: { [P in Direction]: Variants } = {
  up: {
    initial: { y: '0%' },
    animate: { y: '-100%', transition: getTransition() }
  },
  down: {
    initial: { y: '0%' },
    animate: { y: '100%', transition: getTransition() }
  },
  right: {
    initial: { x: '0%' },
    animate: { x: '100%', transition: getTransition() }
  },
  left: {
    initial: { x: '0%' },
    animate: { x: '-100%', transition: getTransition() }
  }
}

export const getOverlaySlideVariant = () => {
  return overlaySlide
}

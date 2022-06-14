import { Transition } from "framer-motion"

const getTransition = (moreOptions?: Transition) => {
  return { type: 'spring', damping: 15, mass: 0.8, stiffness: 60, ...moreOptions }
}

export default getTransition

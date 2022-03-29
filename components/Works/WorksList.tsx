import { AnimatePresence, PanInfo } from 'framer-motion'
import React, { useState } from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import Carousel from './Carousel'
import WorkTitles from './WorkTitles'

const template = `
  'wt wt wt wt wt wt wt'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
  's1 s1 wi wi wi s2 s2'
`

const getDirection = (velocity: number) => {
  if (velocity > 0) return 'left'
  if (velocity < 0) return 'right'
  return false
}

export interface Work {
  title: string
  image: string
  _id: string
}

interface Props {
  works: Work[]
}

const WorksList = ({ works }: Props) => {
  const [curr, setCurr] = useState(0)
  const images = works.map((work) => ({ image: work.image, id: work._id }))

  const handleDrag = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (getDirection(info.velocity.x) === 'left') {
      if (curr !== 0) {
        setCurr((prev) => prev - 1)
      }
    }

    if (getDirection(info.velocity.x) === 'right') {
      if (curr !== works.length - 1) {
        setCurr((prev) => prev + 1)
      }
    }
  }

  return (
    <GridContainer
      templateAreas={template}
      sx={{ height: 'calc(100vh - 50px)' }}
    >
      <AnimatePresence>
        <WorkTitles title={works[curr].title} key={works[curr].title} />
      </AnimatePresence>
      <Carousel images={images} curr={curr} handleDrag={handleDrag} />
      <GridItem areaName="s1" />
      <GridItem areaName="s2" />
    </GridContainer>
  )
}

export default WorksList

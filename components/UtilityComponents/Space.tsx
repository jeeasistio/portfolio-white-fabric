import React from 'react'
import GridItem from './GridItem'

interface Props {
  areaName?: string
}

const Space = ({ areaName = 's' }: Props) => {
  return <GridItem areaName={areaName} />
}

export default Space

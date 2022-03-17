import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import WeBuildText from './WeBuildText'

const template = `
  's1'
  'tx'
  'tx'
  'tx'
  's2'
`

const WeBuild = () => {
  return (
    <GridContainer
      templateAreas={template}
      sx={{ height: '100vh' }}
    >
      <GridItem areaName="s1" />
      <GridItem areaName="s2" />
      <WeBuildText />
    </GridContainer>
  )
}

export default WeBuild

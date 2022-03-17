import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import BottomText from './BottomText'
import HeroImage from './HeroImage'
import TopText from './TopText'

const template = `
  'tt tt tt'
  'hi hi hi'
  'bt bt bt'
`

const Hero = () => {
  return (
    <GridContainer
      templateAreas={template}
      sx={{ height: 'calc(100vh - 50px)' }}
    >
      <TopText />
      <HeroImage />
      <BottomText />
    </GridContainer>
  )
}

export default Hero

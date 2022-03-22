import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import WhyImage from './WhyImage'
import WhyText from './WhyText'

const template = `
  'im im im im im'
  'im im im im im'
  'tx s1 s1 s1 s1'
  'tx s1 s1 s1 s1'
  'tx s1 s1 s1 s1'
`

const WhyChoose = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <GridItem areaName="s1" />
      <WhyImage />
      <WhyText />
    </GridContainer>
  )
}

export default WhyChoose

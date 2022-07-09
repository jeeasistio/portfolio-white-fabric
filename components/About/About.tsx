import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import AboutDesc from './AboutDesc'
import AboutTitle from './AboutTitle'
import Image1 from './Image1'
import Image2 from './Image2'

const template = `
  'i1 i1 i1 i1 i2 i2'
  'i1 i1 i1 i1 i2 i2'
  'i1 i1 i1 i1 i2 i2'
  'at at at s1 s1 s1'
  's2 s2 ds ds ds ds'
  's2 s2 ds ds ds ds'
`

const About = () => {
    return (
        <GridContainer templateAreas={template} sx={{ height: { md: '100vh' } }}>
            <GridItem areaName="s1" />
            <GridItem areaName="s2" />
            <Image1 />
            <Image2 />
            <AboutTitle />
            <AboutDesc />
        </GridContainer>
    )
}

export default About

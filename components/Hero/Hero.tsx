import React from 'react'
import useMobile from '../../lib/useMobile'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import BottomText from './BottomText'
import HeroImage from './HeroImage'
import TopText from './TopText'

const template = `
  's1 s1 s1 s1 s2 s2 s2'
  'tt tt tt tt s2 s2 s2'
  'hi hi hi hi hi hi hi'
  'hi hi hi hi hi hi hi'
  'hi hi hi hi hi hi hi'
  'hi hi hi hi hi hi hi'
  's3 s3 s3 bt bt bt bt'
  's4 s4 s4 s4 s4 s4 s4'
`

const Hero = () => {
    const isMobile = useMobile()

    return (
        <GridContainer templateAreas={template} sx={{ height: 'calc(100vh - 100px)' }}>
            <GridItem areaName="s1" />
            <GridItem areaName="s2" />
            <GridItem areaName="s3" />
            <GridItem areaName="s4" />
            <TopText />
            <HeroImage />
            <BottomText />
        </GridContainer>
    )
}

export default Hero

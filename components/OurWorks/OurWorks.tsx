import React from 'react'
import Image1 from './Image1'
import Image2 from './Image2'
import Image3 from './Image3'
import Image4 from './Image4'
import Image5 from './Image5'
import OurWorksTitle from './OurWorksTitle'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'

const template = `
  's1 s1 s1 s1 i1 i1 i1'
  's5 i5 i5 i5 i1 i1 i1'
  's5 i5 i5 i5 s2 s2 s2'
  's3 s3 s3 ot i4 i4 i4'
  'i2 i2 i2 s4 i4 i4 i4'
  'i2 i2 i2 s4 i4 i4 i4'
  'i2 i2 i2 i3 i3 i3 i3'
`

const OurWorks = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <OurWorksTitle />
      <GridItem areaName="s1" />
      <GridItem areaName="s2" />
      <GridItem areaName="s3" />
      <GridItem areaName="s4" />
      <GridItem areaName="s5" />
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
    </GridContainer>
  )
}

export default OurWorks

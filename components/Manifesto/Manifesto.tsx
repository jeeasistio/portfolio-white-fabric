import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import Space from '../UtilityComponents/Space'
import Image1 from './Image1'
import Manifesto1 from './Manifesto1'
import Manifesto2 from './Manifesto2'
import Manifesto3 from './Manifesto3'

const template = `
  'm1 m1 m1 s1 s1 s1 m2'
  's3 s2 s2 s2 s2 s2 m2'
  's3 s2 s2 s2 s2 s2 m2'
  's3 im im im im s4 m2'
  's3 im im im im s4 s7'
  's3 im im im im s4 s7'
  's3 s5 s5 s5 s5 s5 s5'
  's3 s5 s5 s5 s5 s5 s5'
  's6 s6 s6 s6 m3 m3 m3'
`

const Manifesto = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <GridItem areaName='s1' />
      <GridItem areaName='s2' />
      <GridItem areaName='s3' />
      <GridItem areaName='s4' />
      <GridItem areaName='s5' />
      <GridItem areaName='s6' />
      <GridItem areaName='s7' />
      <Image1 />
      <Manifesto1 />
      <Manifesto2 />
      <Manifesto3 />
    </GridContainer>
  )
}

export default Manifesto

import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import Space from '../UtilityComponents/Space'
import BackButton from './BackButton'
import Image1 from './Image1'
import NextButton from './NextButton'
import Title from './Title'

const template = `
  'im im im im im im wt'
  'im im im im im im wt'
  'im im im im im im wt'
  'im im im im im im wt'
  'bk bk bt bt bt bt bt'
`

const NextWork = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <Image1 />
      <Title />
      <NextButton />
      <BackButton />
    </GridContainer>
  )
}

export default NextWork

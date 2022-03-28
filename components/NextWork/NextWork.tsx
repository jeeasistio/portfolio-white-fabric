import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
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

interface Props {
  image: string
  title: string
  id: string
}

const NextWork = ({ image, title, id }: Props) => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <Image1 image={image} />
      <Title title={title} />
      <NextButton link={''} />
      <BackButton />
    </GridContainer>
  )
}

export default NextWork

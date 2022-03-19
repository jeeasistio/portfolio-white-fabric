import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import Image1 from './Image1'
import Image2 from './Image2'
import Image3 from './Image3'
import Image4 from './Image4'
import Image5 from './Image5'
import Image6 from './Image6'
import Image7 from './Image7'
import Image8 from './Image8'

const template = `
  'i1 i1 i2 i2 i2 i2 i2 '
  'i1 i1 i2 i2 i2 i2 i2 '
  'i1 i1 i3 i3 i3 i3 i3 '
  'i4 i4 i4 i4 i5 i5 i5 '
  'i4 i4 i4 i4 i5 i5 i5 '
  'i4 i4 i4 i4 i7 i7 i7 '
  'i8 i8 i6 i6 i7 i7 i7 '
  'i8 i8 i6 i6 i7 i7 i7 '
`

const Gallery = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '150vh' }}>
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
      <Image6 />
      <Image7 />
      <Image8 />
    </GridContainer>
  )
}

export default Gallery

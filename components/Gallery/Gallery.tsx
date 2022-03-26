import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import GalleryImage from './GalleryImage'

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

export type TGallery = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

interface Props {
  images: TGallery
}

const Gallery = ({ images }: Props) => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '150vh' }}>
      {images.map((image, index) => (
        <GalleryImage key={index} image={image} areaName={`i${index + 1}`} />
      ))}
    </GridContainer>
  )
}

export default Gallery

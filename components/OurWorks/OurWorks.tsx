import React from 'react'
import OurWorksTitle from './OurWorksTitle'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import OurWorksImages from './OurWorksImages'

const template = `
  's1 s1 s1 s1 i1 i1 i1'
  's5 i5 i5 i5 i1 i1 i1'
  's5 i5 i5 i5 s2 s2 s2'
  's3 s3 s3 ot ot i4 i4'
  'i2 i2 i2 s4 s4 i4 i4'
  'i2 i2 i2 s4 s4 i4 i4'
  'i2 i2 i2 i3 i3 i3 i3'
`

export type TOurWorksImages = [string, string, string, string, string]

interface Props {
  images: TOurWorksImages
}

const OurWorks = ({ images }: Props) => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <OurWorksTitle />
      <GridItem areaName="s1" />
      <GridItem areaName="s2" />
      <GridItem areaName="s3" />
      <GridItem areaName="s4" />
      <GridItem areaName="s5" />
      {images.map((image, index) => (
        <OurWorksImages key={index} image={image} areaName={`i${index + 1}`} />
      ))}
    </GridContainer>
  )
}

export default OurWorks

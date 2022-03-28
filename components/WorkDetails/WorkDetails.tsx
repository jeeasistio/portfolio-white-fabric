import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import Description from './Description'
import Image1 from './Image1'

const template = `
  'ds ds im'
`

interface Props {
  details: string
  image: string
}

const WorkDetails = ({ details, image }: Props) => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <Description text={details} />
      <Image1 image={image} />
    </GridContainer>
  )
}

export default WorkDetails

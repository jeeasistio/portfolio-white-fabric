import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import Description from './Description'
import Image1 from './Image1'

const template = `
  'ds ds im'
`

const WorkDetails = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: '100vh' }}>
      <Description />
      <Image1 />
    </GridContainer>
  )
}

export default WorkDetails

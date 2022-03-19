import React from 'react'
import GridContainer from '../UtilityComponents/GridContainer'
import Description from './Description'
import Title from './Title'
import WorkImage from './WorkImage'

const template = `
  'wt wt im im im im im'
  'wt wt im im im im im'
  'wt wt im im im im im'
  'wt wt im im im im im'
  'wt wt im im im im im'
  'wt wt ds ds ds ds ds'
  'wt wt ds ds ds ds ds'
  'wt wt ds ds ds ds ds'
`

const WorkIntro = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: 'calc(100vh - 100px)' }}>
      <Title />
      <WorkImage />
      <Description />
    </GridContainer>
  )
}

export default WorkIntro

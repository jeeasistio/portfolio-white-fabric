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

interface Props {
  title: string
  image: string
  about: string
}

const WorkIntro = ({ title, image, about }: Props) => {
  return (
    <GridContainer
      templateAreas={template}
      sx={{ height: 'calc(100vh - 100px)' }}
    >
      <Title title={title} />
      <WorkImage image={image} />
      <Description description={about} />
    </GridContainer>
  )
}

export default WorkIntro

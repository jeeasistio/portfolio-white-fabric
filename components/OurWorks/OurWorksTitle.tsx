import React from 'react'
import CubeButton from '../UtilityComponents/CubeButton'
import GridItem from '../UtilityComponents/GridItem'

const OurWorksTitle = () => {
  return (
    <GridItem areaName="ot" sx={{ display: 'flex', justifyContent: 'center', width: 'max-content' }}>
      <CubeButton text="Our Works" variant="h2" link href="/works" />
    </GridItem>
  )
}

export default OurWorksTitle

import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import NormalImage from '../UtilityComponents/NormalImage'

const WhyImage = () => {
    return (
        <GridItem areaName="im">
            <GridOverlay />
            <NormalImage src="https://i.ibb.co/cYZXSbb/why.jpg" alt="architecture" />
        </GridItem>
    )
}

export default WhyImage

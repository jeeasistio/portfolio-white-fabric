import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const WhyImage = () => {
    return (
        <GridItem areaName="im">
            <GridOverlay />
            <ParallaxImage src="https://i.ibb.co/cYZXSbb/why.jpg" alt="architecture" />
        </GridItem>
    )
}

export default WhyImage

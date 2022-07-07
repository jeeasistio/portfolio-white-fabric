import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

interface Props {
    image: string
    areaName: string
}

const OurWorksImages = ({ image, areaName }: Props) => {
    return (
        <GridItem areaName={areaName}>
            <GridOverlay />
            <ParallaxImage src={image} alt="architecture" />
        </GridItem>
    )
}

export default OurWorksImages

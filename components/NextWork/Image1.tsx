import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import MouseParallaxImage from '../UtilityComponents/MouseParallaxImage'

interface Props {
    image: string
}

const Image1 = ({ image }: Props) => {
    return (
        <GridItem areaName="im">
            <GridOverlay />
            <MouseParallaxImage src={image} alt="architecture" />
        </GridItem>
    )
}

export default Image1

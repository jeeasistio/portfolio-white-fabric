import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import MouseParallaxImage from '../UtilityComponents/MouseParallaxImage'

interface Props {
    image: string
}

const WorkImage = ({ image }: Props) => {
    return (
        <GridItem areaName="im">
            <MouseParallaxImage src={image} alt="architecture" />
            <GridOverlay />
        </GridItem>
    )
}

export default WorkImage

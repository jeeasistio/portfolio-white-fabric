import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import NormalImage from '../UtilityComponents/NormalImage'

interface Props {
    image: string
}

const Image1 = ({ image }: Props) => {
    return (
        <GridItem areaName="im">
            <GridOverlay />
            <NormalImage src={image} alt="architecture" />
        </GridItem>
    )
}

export default Image1

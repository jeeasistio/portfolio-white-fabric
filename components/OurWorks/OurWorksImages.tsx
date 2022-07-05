import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import NormalImage from '../UtilityComponents/NormalImage'

interface Props {
    image: string
    areaName: string
}

const OurWorksImages = ({ image, areaName }: Props) => {
    return (
        <GridItem areaName={areaName}>
            <GridOverlay />
            <NormalImage src={image} alt="architecture" />
        </GridItem>
    )
}

export default OurWorksImages

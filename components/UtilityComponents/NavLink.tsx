import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import CubeButton from './CubeButton'
import GridOverlay from './GridOverlay'

interface Props {
    name: string
    link: string
    display: string
    areaName: string
}

const NavLink = ({ name, link, display, areaName }: Props) => {
    return (
        <GridItem areaName={areaName}>
            <CubeButton text={display} link href={link} variant="h2" />
            <GridOverlay />
        </GridItem>
    )
}

export default NavLink

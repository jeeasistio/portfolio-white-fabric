import React from 'react'
import CubeButton from './CubeButton'
import GridItem from './GridItem'

interface Props {
    onClick(): void
}

const NavClose = ({ onClick }: Props) => {
    return (
        <GridItem areaName="cl">
            <CubeButton text="Close" variant="h5" onClick={onClick} />
        </GridItem>
    )
}

export default NavClose

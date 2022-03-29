import { Box } from '@mui/material'
import { SxObject } from '../../interfaces/interfaces'
import CubeButton from './CubeButton'
import GridItem from './GridItem'

const sx: SxObject = {}

const NavButton = () => {
  return (
    <GridItem areaName="nb">
      <CubeButton text="Menu" />
    </GridItem>
  )
}

export default NavButton

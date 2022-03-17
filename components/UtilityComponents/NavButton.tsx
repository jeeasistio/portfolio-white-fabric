import { Box } from '@mui/material'
import { SxObject } from '../../interfaces/interfaces'
import GridItem from './GridItem'

const sx: SxObject = {}

const NavButton = () => {
  return (
    <GridItem areaName="nb">
      <Box
        sx={{ height: '100%', width: '100%', backgroundColor: 'success.main' }}
      />
    </GridItem>
  )
}

export default NavButton

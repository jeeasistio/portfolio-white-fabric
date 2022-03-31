import CubeButton from './CubeButton'
import GridItem from './GridItem'

interface Props {
  handleClick(): void
}

const NavButton = ({ handleClick }: Props) => {
  return (
    <GridItem areaName="nb">
      <CubeButton text="Menu" variant="h5" onClick={handleClick} />
    </GridItem>
  )
}

export default NavButton

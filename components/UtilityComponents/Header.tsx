import GridContainer from './GridContainer'
import Logo from './Logo'
import NavButton from './NavButton'
import Space from './Space'

const template = `
  'lg lg s s s s s s s s s nb'
  'lg lg s s s s s s s s s nb'
`

const Header = () => {
  return (
    <GridContainer templateAreas={template} sx={{ height: 50 }}>
      <Logo />
      <Space />
      <NavButton />
    </GridContainer>
  )
}

export default Header

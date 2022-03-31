import React from 'react'
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import NavClose from './NavClose'
import NavLink from './NavLink'

const navLinks = [
  { name: 'home', link: '/', display: 'Home', areaName: 'hm' },
  { name: 'works', link: '/works', display: 'Works', areaName: 'wk' },
  { name: 'contact', link: '/contact', display: 'Contact', areaName: 'ct' }
]

const template = `
  's1 s1 s1 s2 s2 s2 cl'
  'hm hm hm s2 s2 s2 s4'
  's3 s3 s3 s2 s2 s2 s4'
  's3 s3 s3 s9 wk wk wk'
  's3 s3 s3 s9 s5 s5 s7'
  's8 ct ct ct s5 s5 s7'
  's8 s6 s6 s6 s6 s6 s7'
`

interface Props {
  open: boolean
  handleClose(): void
}

const NavPage = ({ open, handleClose }: Props) => {
  return (
    <GridContainer
      templateAreas={template}
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'common.black',
        zIndex: '-1'
      }}
    >
      <GridItem areaName="s1" />
      <GridItem areaName="s2" />
      <GridItem areaName="s3" />
      <GridItem areaName="s4" />
      <GridItem areaName="s5" />
      <GridItem areaName="s6" />
      <GridItem areaName="s7" />
      <GridItem areaName="s8" />
      <GridItem areaName="s9" />
      {navLinks.map((link) => (
        <NavLink key={link.name} {...link} />
      ))}
      <NavClose />
    </GridContainer>
  )
}

export default NavPage

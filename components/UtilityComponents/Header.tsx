import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import GridContainer from './GridContainer'
import Logo from './Logo'
import NavButton from './NavButton'
import NavPage from './NavPage'
import Space from './Space'

const template = `
  'lg s s s s s s s s s s nb'
  'lg s s s s s s s s s s nb'
`

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <GridContainer templateAreas={template} sx={{ height: 100 }}>
            <Logo />
            <Space />
            <NavButton handleClick={handleOpen} />

            <AnimatePresence exitBeforeEnter>{open && <NavPage handleClose={handleClose} />}</AnimatePresence>
        </GridContainer>
    )
}

export default Header

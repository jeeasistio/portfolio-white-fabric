import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import getTransition from '../../lib/getTransition'
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
    handleClose(): void
}

const ctnVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

const NavPage = ({ handleClose }: Props) => {
    return (
        <Box
            sx={{ zIndex: 'appBar', position: 'fixed', top: 0, left: 0, backgroundColor: 'common.black' }}
            component={motion.div}
            variants={ctnVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            transition={getTransition({ when: 'beforeChildren' })}
        >
            <GridContainer
                templateAreas={template}
                sx={{
                    width: '100vw',
                    height: '100vh'
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
                <NavClose onClick={handleClose} />
            </GridContainer>
        </Box>
    )
}

export default NavPage

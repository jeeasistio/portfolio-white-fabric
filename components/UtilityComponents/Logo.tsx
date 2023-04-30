import { Box, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import getTransition from '../../lib/getTransition'
import GridItem from './GridItem'

const Logo = () => {
    const [hovering, setHovering] = useState(false)

    const handleHoverStart = () => setHovering(true)
    const handleHoverEnd = () => setHovering(false)

    return (
        <GridItem areaName="lg">
            <Link href="/">
                <a>
                    <Box
                        component={motion.div}
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <AnimatePresence exitBeforeEnter>
                            {!hovering && (
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.1 },
                                    }}
                                    transition={getTransition({})}
                                    key="logo"
                                >
                                    <img
                                        src="https://i.ibb.co/pLYHWWh/white-fabric-logo.png"
                                        alt="white-fabric-logo"
                                        width="120"
                                        height="120"
                                    />
                                </Box>
                            )}

                            {hovering && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                        width: 120,
                                    }}
                                >
                                    <Typography
                                        component={motion.h5}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            y: 10,
                                            transition: { duration: 0.2 },
                                        }}
                                        transition={getTransition({
                                            damping: 10,
                                        })}
                                        variant="h5"
                                        fontWeight="700"
                                        key="white"
                                        sx={{ letterSpacing: 8 }}
                                    >
                                        WHITE
                                    </Typography>
                                    <Typography
                                        component={motion.h5}
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                            transition: { duration: 0.2 },
                                        }}
                                        transition={getTransition({
                                            damping: 10,
                                        })}
                                        variant="h5"
                                        fontWeight="700"
                                        sx={{ letterSpacing: 8 }}
                                    >
                                        FABRIC
                                    </Typography>
                                </Box>
                            )}
                        </AnimatePresence>
                    </Box>
                </a>
            </Link>
        </GridItem>
    )
}

export default Logo

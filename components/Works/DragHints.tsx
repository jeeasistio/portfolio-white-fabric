import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import getTransition from '../../lib/getTransition'

export const DragHints = () => {
    return (
        <Box
            component={motion.div}
            animate={{ opacity: [0, 1, 1, 1, 1, 1, 1, 0] }}
            transition={{
                repeat: Infinity,
                repeatDelay: 5,
                duration: 8,
            }}
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
            <Box sx={{ display: 'flex' }}>
                <Box
                    component={motion.div}
                    animate={{ x: [0, -20], opacity: [0.5, 1, 1, 0, 0] }}
                    transition={getTransition({
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        duration: 1.5,
                    })}
                >
                    <Image
                        src="/left-arrow.svg"
                        alt="left-arrow"
                        width={5}
                        height={9}
                    />
                </Box>
                <Box
                    component={motion.div}
                    animate={{ x: [0, -15], opacity: [0.5, 1, 1, 1, 0] }}
                    transition={getTransition({
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        duration: 1.5,
                        delay: 0.1,
                    })}
                >
                    <Image
                        src="/left-arrow.svg"
                        alt="left-arrow"
                        width={5}
                        height={9}
                    />
                </Box>
            </Box>

            <Typography>Drag to navigate</Typography>

            <Box sx={{ display: 'flex' }}>
                <Box
                    component={motion.div}
                    animate={{ x: [0, 15], opacity: [0.5, 1, 1, 1, 0] }}
                    transition={getTransition({
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        duration: 1.5,
                        delay: 0.1,
                    })}
                >
                    <Image
                        src="/right-arrow.svg"
                        alt="right-arrow"
                        width={5}
                        height={9}
                    />
                </Box>
                <Box
                    component={motion.div}
                    animate={{ x: [0, 20], opacity: [0.5, 1, 1, 0, 0] }}
                    transition={getTransition({
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        duration: 1.5,
                    })}
                >
                    <Image
                        src="/right-arrow.svg"
                        alt="right-arrow"
                        width={5}
                        height={9}
                    />
                </Box>
            </Box>
        </Box>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'
import getTransition from '../../lib/getTransition'

interface Props {
    src: string
    alt: string
}

const ParallaxImage = ({ src, alt }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useViewportScroll()
    const [offsetTop, setOffsetTop] = useState(0)
    const [height, setHeight] = useState(0)
    const offset = height * 0.05
    const initial = offsetTop - height
    const final = offsetTop + offset

    const yValue = useTransform(scrollY, [initial, final], [0, -offset])
    const y = useSpring(yValue, { damping: getTransition().damping, stiffness: getTransition().stiffness })

    useEffect(() => {
        setOffsetTop(ref.current?.getBoundingClientRect().top || 0 + window.scrollY || window.pageYOffset)
        setHeight(window.innerHeight)
    }, [])

    return (
        <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            {/* @ts-ignore */}
            <Box component={motion.div} ref={ref} style={{ y }} sx={{ height: '100%', width: '100%' }}>
                <img
                    src={src}
                    alt={alt}
                    width={'100%'}
                    height={'130%'}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </Box>
        </Box>
    )
}

export default ParallaxImage

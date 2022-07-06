import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useMouse from '@react-hook/mouse-position'
import getTransition from '../../lib/getTransition'

interface Props {
    src: string
    alt: string
}

const MouseParallaxImage = ({ src, alt }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const offset = 10
    const [elemHeight, setElemHeight] = useState(0)
    const [elemWidth, setElemWidth] = useState(0)

    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
        fps: 60
    })

    const mouseX = useMotionValue(mouse.y ?? 0)
    const mouseY = useMotionValue(mouse.x ?? 0)
    const xValue = useTransform(mouseX, [0, elemWidth], [offset, -offset])
    const yValue = useTransform(mouseY, [0, elemHeight], [offset, -offset])
    const y = useSpring(yValue, { damping: getTransition().damping, stiffness: getTransition().stiffness })
    const x = useSpring(xValue, { damping: getTransition().damping, stiffness: getTransition().stiffness })

    useEffect(() => {
        mouseX.set(mouse.x ?? 0)
        mouseY.set(mouse.y ?? 0)
    }, [mouse])

    useEffect(() => {
        setElemHeight(ref.current?.clientHeight || 0)
        setElemWidth(ref.current?.clientWidth || 0)
    }, [])

    return (
        <Box ref={ref} sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            {/* @ts-ignore */}
            <Box sx={{ height: '100%', width: '100%' }} component={motion.div} style={{ x, y, scale: 1.1 }}>
                <img
                    src={src}
                    alt={alt}
                    width={'100%'}
                    height={'100%'}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </Box>
        </Box>
    )
}

export default MouseParallaxImage

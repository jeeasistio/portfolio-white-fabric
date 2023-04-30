import { Box } from '@mui/material'
import { motion, PanInfo } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useMobile from '../../lib/useMobile'
import GridItem from '../UtilityComponents/GridItem'
import { DragHints } from './DragHints'
import Pagination from './Pagination'

interface Props {
    images: { image: string; id: string }[]
    curr: number
    handleDrag: (
        e: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => void
}

const Carousel = ({ images, curr, handleDrag }: Props) => {
    const isMobile = useMobile()
    const [x, setX] = useState(0)
    const [dragging, setDragging] = useState(false)
    const activeImageWidth = 350
    const inActiveImageWidth = isMobile ? 100 : 100
    const activeImageHeight = isMobile ? 350 : 300
    const inActiveImageHeight = isMobile ? 200 : 350

    const handleDragStart = () => {
        setDragging(true)
    }
    const handleDragEnd = (
        e: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        handleDrag(e, info)
        setDragging(false)
    }

    useEffect(() => {
        setX(curr * -activeImageWidth)
    }, [curr, activeImageWidth])

    return (
        <GridItem
            areaName="wi"
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                cursor: 'pointer',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 350,
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 25, md: 75 },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'max-content',
                    }}
                >
                    <DragHints />
                </Box>

                <Box
                    sx={{ position: 'absolute', height: '100%' }}
                    component={motion.div}
                    animate={{ x }}
                    transition={{ duration: 0.7 }}
                >
                    <Box
                        sx={{ display: 'flex', height: '100%' }}
                        component={motion.div}
                        drag="x"
                        dragConstraints={{ right: 0, left: 0 }}
                        dragElastic={0.1}
                        dragMomentum={false}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        {images.map(({ image, id }, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: activeImageWidth,
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    p: 3,
                                    pointerEvents:
                                        curr === index ? 'inherit' : 'none',
                                }}
                            >
                                <Link
                                    href={
                                        curr === index && !dragging
                                            ? `/work/${id}`
                                            : ''
                                    }
                                >
                                    <a onMouseDown={(e) => e.preventDefault()}>
                                        <Box
                                            sx={{
                                                overflow: 'hidden',
                                                position: 'relative',
                                            }}
                                            component={motion.div}
                                            animate={{
                                                width:
                                                    curr === index
                                                        ? activeImageWidth
                                                        : inActiveImageWidth,
                                                height:
                                                    curr === index
                                                        ? activeImageHeight
                                                        : inActiveImageHeight,
                                            }}
                                            initial={{
                                                width: activeImageWidth,
                                                height: activeImageHeight,
                                            }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <img
                                                src={image}
                                                alt="work"
                                                width={350}
                                                height={500}
                                                style={{
                                                    objectFit: 'cover',
                                                    pointerEvents: 'none',
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform:
                                                        'translate(-50%, -50%)',
                                                }}
                                            />
                                        </Box>
                                    </a>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 25, md: 75 },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'max-content',
                    }}
                >
                    <Pagination currPage={curr} totalPages={images.length} />
                </Box>
            </Box>
        </GridItem>
    )
}

export default Carousel

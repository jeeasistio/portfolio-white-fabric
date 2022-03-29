import { Box } from '@mui/material'
import { motion, PanInfo } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import GridItem from '../UtilityComponents/GridItem'

interface Props {
  images: { image: string; id: string }[]
  curr: number
  handleDrag: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
}

const Carousel = ({ images, curr, handleDrag }: Props) => {
  const [x, setX] = useState(0)
  const [dragging, setDragging] = useState(false)

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
    setX(curr * -350)
  }, [curr])

  return (
    <GridItem
      areaName="wi"
      sx={{
        width: '100%',
        justifySelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          width: 350,
          height: '100%'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: '100%'
          }}
        >
          <Box
            sx={{ position: 'absolute', height: '100%' }}
            component={motion.div}
            animate={{ x }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{ display: 'flex', height: '100%' }}
              component={motion.div}
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragTransition={{ power: 0.2, timeConstant: 200 }}
            >
              {images.map(({ image, id }, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 350,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    pointerEvents: curr === index ? 'inherit' : 'none'
                  }}
                >
                  <Link href={curr === index && !dragging ? `/work/${id}` : ''}>
                    <a onMouseDown={(e) => e.preventDefault()}>
                      <Box
                        sx={{ overflow: 'hidden', position: 'relative' }}
                        component={motion.div}
                        animate={{
                          width: curr === index ? 350 : 200,
                          height: curr === index ? 500 : 400,
                          cursor: curr === index ? 'pointer' : 'inherit'
                        }}
                        initial={{
                          width: 200,
                          height: 350
                        }}
                        transition={{ duration: 1 }}
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
                            transform: 'translate(-50%, -50%)'
                          }}
                        />
                      </Box>
                    </a>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Carousel

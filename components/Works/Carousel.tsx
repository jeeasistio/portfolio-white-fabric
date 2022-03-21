import { Box, Typography } from '@mui/material'
import { motion, PanInfo } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import GridItem from '../UtilityComponents/GridItem'

interface Props {
  images: string[]
  curr: number
  handleDrag: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
}

const Carousel = ({ images, curr, handleDrag }: Props) => {
  const [x, setX] = useState(0)

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
              onDragEnd={handleDrag}
              dragTransition={{ power: 0.2, timeConstant: 200 }}
            >
              {images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 350,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3
                  }}
                >
                  <Box
                    sx={{ backgroundColor: 'secondary.main' }}
                    component={motion.div}
                    animate={{
                      width: curr === index ? 350 : 100,
                      height: curr === index ? 500 : 300
                    }}
                    transition={{ duration: 1 }}
                  >
                    <Typography align="center" variant="h2">
                      {image}
                    </Typography>
                  </Box>
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

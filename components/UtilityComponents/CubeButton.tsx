import { Box, Typography, TypographyVariant } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface NormalButton {
    text: string
    variant?: TypographyVariant
    onClick?: () => void
    link?: false
}

interface LinkButton {
    text: string
    href: string
    variant?: TypographyVariant
    onClick?: () => void
    link?: true
}

type CubeButton = LinkButton | NormalButton

const NormalButton = ({ text, onClick = () => {}, variant = 'body1' }: NormalButton) => {
    const controls = useAnimation()

    const handleHoverStart = () => controls.start({ rotateX: '90deg' })
    const handleHoverEnd = () => controls.start({ rotateX: '0deg' })

    return (
        <Box
            component={motion.button}
            onClick={onClick}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'none',
                color: 'inherit',
                border: 'none',
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit',
                perspective: '800px'
            }}
        >
            <Box
                component={motion.div}
                animate={controls}
                transition={{ duration: 0.8 }}
                sx={{
                    position: 'relative',
                    transformStyle: 'preserve-3d'
                }}
            >
                <Typography variant={variant} sx={{ opacity: 0 }}>
                    {text}
                </Typography>

                <Typography
                    variant={variant}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translateZ(0.5em)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    {text}
                </Typography>

                <Typography
                    variant={variant}
                    fontStyle="italic"
                    sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: '-40%',
                        transform: 'rotateX(-90deg)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}

const LinkButton = ({ href, text, variant }: LinkButton) => {
    return (
        <Link href={href}>
            <a>
                <NormalButton text={text} variant={variant} />
            </a>
        </Link>
    )
}

const CubeButton = (props: CubeButton) => {
    if (props.link) {
        return <LinkButton {...props} />
    }

    return <NormalButton text={props.text} variant={props.variant} onClick={props.onClick} />
}

export default CubeButton

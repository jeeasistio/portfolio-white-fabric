import { Box, Typography, TypographyVariant } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface NormalButton {
    text: string
    variant?: TypographyVariant
    onClick?: () => void
    link?: false
    fontWeight?: string
}

interface LinkButton {
    text: string
    href: string
    variant?: TypographyVariant
    onClick?: () => void
    link?: true
    fontWeight?: string
}

type CubeButton = LinkButton | NormalButton

const NormalButton = ({ text, onClick = () => {}, variant = 'body1', fontWeight = '500' }: NormalButton) => {
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
                p: 3,
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'none',
                color: 'inherit',
                border: 'none',
                font: 'inherit',
                textTransform: 'uppercase',
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
                        fontWeight,
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
                        fontWeight,
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

const LinkButton = ({ href, text, variant, fontWeight = '300' }: LinkButton) => {
    return (
        <Link href={href}>
            <a>
                <NormalButton text={text} variant={variant} fontWeight={fontWeight} />
            </a>
        </Link>
    )
}

const CubeButton = (props: CubeButton) => {
    if (props.link) {
        return <LinkButton {...props} />
    }

    return (
        <NormalButton text={props.text} variant={props.variant} onClick={props.onClick} fontWeight={props.fontWeight} />
    )
}

export default CubeButton

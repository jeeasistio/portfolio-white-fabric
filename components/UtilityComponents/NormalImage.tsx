import { Box } from '@mui/material'

interface Props {
    src: string
    alt: string
}

const NormalImage = ({ src, alt }: Props) => {
    return (
        <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <img
                src={src}
                alt={alt}
                width={'100%'}
                height={'100%'}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
        </Box>
    )
}

export default NormalImage

import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const useMobile = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return isMobile
}

export default useMobile

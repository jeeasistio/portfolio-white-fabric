import { Box, Typography } from '@mui/material'
import TextCtn from '../UtilityComponents/TextCtn'
import { AnimatePresence } from 'framer-motion'

interface Props {
    currPage: number
    totalPages: number
}

const Pagination = ({ currPage, totalPages }: Props) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Box sx={{ display: 'flex' }} key={currPage}>
                <TextCtn
                    text={(currPage + 1).toString()}
                    animation="slide"
                    variant="h4"
                    viewportMargin={0}
                    rootProps={{ p: 0 }}
                    transitionProps={{ duration: 0.5 }}
                />
                <Typography variant="h4">&nbsp;/ {totalPages}</Typography>
            </Box>
        </AnimatePresence>
    )
}

export default Pagination

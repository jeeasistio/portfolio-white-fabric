import { Box } from '@mui/material'
import CubeButton from '../UtilityComponents/CubeButton'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const template = `
    'se se se se se s1 s1'
    'em em em em em em em'
    'nm nm nm nm nm nm nm'
    'ms ms ms ms ms ms ms'
    'ms ms ms ms ms ms ms'
    's2 s2 s2 bt bt bt bt'
`

const ContactForm = () => {
    return (
        <GridContainer templateAreas={template} areaName="fr">
            <GridItem areaName="se">
                <TextCtn text="Send us a message" variant="h5" textStyle={{ fontWeight: '700' }} />
            </GridItem>
            <GridItem areaName="em">
                <Box>Email</Box>
            </GridItem>
            <GridItem areaName="nm">
                <Box>Name</Box>
            </GridItem>
            <GridItem areaName="ms">
                <Box>Message</Box>
            </GridItem>
            <GridItem areaName="bt">
                <CubeButton text="Send" />
            </GridItem>

            <GridItem areaName="s1" />
            <GridItem areaName="s2" />
        </GridContainer>
    )
}

export default ContactForm

import useMobile from '../../lib/useMobile'
import GridContainer from '../UtilityComponents/GridContainer'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const templateMd = `
    'ti ti ti s1 s1 s1 s1'
    's2 s2 ad ad ad s3 s3'
    'em em ad ad ad s3 s3'
    's4 s4 ad ad ad nm nm'
    's4 s4 s5 s5 s5 s5 s5'
`

const templateXs = `
    'ti ti ti s1 s1 s1 s1'
    's5 s5 s5 s5 s2 s2 s3'
    'em em em em em em s3'
    's4 s4 ad ad ad ad s3'
    's4 s4 nm nm nm nm nm'
`

const ContactDetails = () => {
    const isMobile = useMobile()

    return (
        <GridContainer templateAreas={isMobile ? templateXs : templateMd} areaName="ct">
            <GridItem areaName="ti" sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextCtn text="Contact" variant="h2" viewportMargin={0} animation="slide" />
            </GridItem>
            <GridItem areaName="ad" sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextCtn text="9 Pineknoll Dr. Flemington, NJ 08822" variant="h5" viewportMargin={0} />
            </GridItem>
            <GridItem areaName="em">
                <TextCtn text="whitefabric@gmail.com" variant="h6" viewportMargin={0} />
            </GridItem>
            <GridItem areaName="nm">
                <TextCtn text="+1 205-705-8524" variant="h5" viewportMargin={0} />
            </GridItem>

            <GridItem areaName="s1" />
            <GridItem areaName="s2" />
            <GridItem areaName="s3" />
            <GridItem areaName="s4" />
            <GridItem areaName="s5" />
        </GridContainer>
    )
}

export default ContactDetails

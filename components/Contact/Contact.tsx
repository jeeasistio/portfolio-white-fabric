import useMobile from '../../lib/useMobile'
import GridContainer from '../UtilityComponents/GridContainer'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import ContactImage from './ContactImage'

const templateMd = `
    'im im im im im im im'
    'ct ct ct ct ct fr fr'
    'ct ct ct ct ct fr fr'
    'ct ct ct ct ct fr fr'
`

const templateXs = `
    'im im im im im im im'
    'ct ct ct ct ct ct ct'
    'fr fr fr fr fr fr fr'
`

const Contact = () => {
    const isMobile = useMobile()

    return (
        <GridContainer templateAreas={isMobile ? templateXs : templateMd}>
            <ContactImage />
            <ContactDetails />
            <ContactForm />
        </GridContainer>
    )
}

export default Contact

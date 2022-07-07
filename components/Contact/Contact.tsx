import GridContainer from '../UtilityComponents/GridContainer'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import ContactImage from './ContactImage'

const template = `
    'im im im im im im im'
    'ct ct ct ct ct fr fr'
    'ct ct ct ct ct fr fr'
    'ct ct ct ct ct fr fr'
`

const Contact = () => {
    return (
        <GridContainer templateAreas={template}>
            <ContactImage />
            <ContactDetails />
            <ContactForm />
        </GridContainer>
    )
}

export default Contact

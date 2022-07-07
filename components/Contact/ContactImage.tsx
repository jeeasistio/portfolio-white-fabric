import GridItem from '../UtilityComponents/GridItem'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const ContactImage = () => {
    return (
        <GridItem areaName="im" sx={{ position: 'relative', overflow: 'hidden' }}>
            <ParallaxImage src="https://i.ibb.co/W0XcLzw/contact-image.jpg" alt="architecture" />
        </GridItem>
    )
}

export default ContactImage

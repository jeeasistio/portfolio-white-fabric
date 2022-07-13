import GridItem from '../UtilityComponents/GridItem'
import GridOverlay from '../UtilityComponents/GridOverlay'
import ParallaxImage from '../UtilityComponents/ParallaxImage'

const ContactImage = () => {
    return (
        <GridItem areaName="im" sx={{ position: 'relative', overflow: 'hidden', minHeight: 300 }}>
            <ParallaxImage src="https://i.ibb.co/W0XcLzw/contact-image.jpg" alt="architecture" />
            <GridOverlay />
        </GridItem>
    )
}

export default ContactImage

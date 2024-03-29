import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const AboutTitle = () => {
    return (
        <GridItem areaName="at" sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextCtn text="About us" variant="h2" animation="slide" viewportMargin={0} />
        </GridItem>
    )
}

export default AboutTitle

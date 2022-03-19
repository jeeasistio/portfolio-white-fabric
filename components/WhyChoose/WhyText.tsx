import React from 'react'
import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

const WhyText = () => {
  return (
    <GridItem
      areaName="tx"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TextCtn
        text="Ut elementum cursus dui, vitae ullamcorper lectus luctus sed. Ut sed
        sapien lacus. Praesent non arcu sit amet elit rhoncus malesuada interdum
        pretium lacus. Fusce laoreet vel diam eget scelerisque. Etiam aliquam
        nisl ut augue venenatis, ac facilisis purus feugiat. Sed massa ipsum,
        efficitur eget dapibus a, sollicitudin vitae risus. Suspendisse in
        tellus ipsum. Duis aliquet tincidunt ligula eget consequat."
      />
    </GridItem>
  )
}

export default WhyText

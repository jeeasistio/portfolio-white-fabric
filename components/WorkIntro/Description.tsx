import GridItem from '../UtilityComponents/GridItem'
import TextCtn from '../UtilityComponents/TextCtn'

interface Props {
  description: string
}

const Description = ({ description }: Props) => {
  return (
    <GridItem areaName="ds">
      <TextCtn text={description} typographyProps={{ viewport: { once: true, margin: '0%' }}} transitionProps={{ delay: 0.4 }} />
    </GridItem>
  )
}

export default Description

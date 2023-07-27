import {
  Container,
  DateFood,
  Divider,
  FoodName,
  Status,
  StatusStylesProps,
} from './styles'

type Props = {
  type?: StatusStylesProps
  mealName: string
}

export function Meal({ type = 'GOOD', mealName }: Props) {
  return (
    <Container>
      <DateFood>20:00</DateFood>
      <Divider />
      <FoodName>{mealName}</FoodName>
      <Status type={type} />
    </Container>
  )
}

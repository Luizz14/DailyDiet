import {
  Container,
  DateFood,
  Divider,
  FoodName,
  Status,
  StatusStylesProps,
} from './styles'

type Props = {
  healthy?: StatusStylesProps
  mealName: string
}

export function Meal({ healthy = true, mealName }: Props) {
  return (
    <Container>
      <DateFood>20:00</DateFood>
      <Divider />
      <FoodName>{mealName}</FoodName>
      <Status healthy={healthy} />
    </Container>
  )
}

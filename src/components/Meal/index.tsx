import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  DateFood,
  Divider,
  FoodName,
  Status,
  StatusStylesProps,
} from './styles'

type Props = TouchableOpacityProps & {
  mealName: string
  mealTime: string
  healthy?: StatusStylesProps
}

export function Meal({ healthy = true, mealName, mealTime, ...rest }: Props) {
  return (
    <Container {...rest}>
      <DateFood>{mealTime}</DateFood>
      <Divider />
      <FoodName>{mealName}</FoodName>
      <Status healthy={healthy} />
    </Container>
  )
}

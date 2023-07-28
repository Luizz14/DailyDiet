import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Circle, Container, Title } from './styles'

type Props = TouchableOpacityProps &
  ButtonTypeStyleProps & {
    title: string
  }

export function Options({ title, type = 'GREEN', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Circle type={type} />
      <Title>{title}</Title>
    </Container>
  )
}

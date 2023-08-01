import { TouchableOpacityProps } from 'react-native'
import { Container, SubTitle, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  subTitle?: string
  color?: string
}

export function DataInfo({ title, subTitle, color = '', ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

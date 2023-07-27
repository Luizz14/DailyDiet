import { useTheme } from 'styled-components/native'
import { Container, SubTitle, Title } from './styles'

type Props = {
  title: string
  subTitle?: string
  color?: string
}

export function DataInfo({ title, subTitle, color = '' }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

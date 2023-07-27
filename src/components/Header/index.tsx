import { Container, BackIcon, Title } from './styles'

type Props = {
  title: string
  showBackButton?: Boolean
}

export function Header({ title, showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && <BackIcon />}
      <Title>{title}</Title>
    </Container>
  )
}

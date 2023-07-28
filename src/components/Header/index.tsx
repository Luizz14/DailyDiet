import { Container, BackIcon, Title, Content, BackButton } from './styles'

type Props = {
  title: string
  showBackButton?: Boolean
  color?: string
}

export function Header({ title, color, showBackButton = false }: Props) {
  return (
    <Container color={color}>
      <Content>
        {showBackButton && (
          <BackButton>
            <BackIcon />
          </BackButton>
        )}
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}

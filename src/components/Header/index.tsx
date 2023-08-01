import {
  Container,
  Title,
  Content,
  SecondTitle,
  SecondTitleButton,
} from './styles'
import { ButtonIcon } from '@components/ButtonIcon'

type Props = {
  title: string
  showBackButton?: boolean
  showSecondTitle?: boolean
  color?: string
  onPressArrow?: () => void
  onPressSecondTitle?: () => void
}

export function Header({
  title,
  color,
  showBackButton = false,
  showSecondTitle = false,
  onPressArrow,
  onPressSecondTitle,
}: Props) {
  return (
    <Container color={color}>
      <Content>
        {showBackButton && (
          <ButtonIcon
            nameIcon='arrow-back-ios'
            type='SECONDARY'
            onPress={onPressArrow}
          />
        )}
        <Title>{title}</Title>
        {showSecondTitle && (
          <SecondTitleButton onPress={onPressSecondTitle}>
            <SecondTitle>Editar</SecondTitle>
          </SecondTitleButton>
        )}
      </Content>
    </Container>
  )
}

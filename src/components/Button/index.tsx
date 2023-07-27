import { TouchableOpacityProps } from 'react-native'

import { ButtonTypeStyleProps, Container, Title } from './styles'
import { ButtonIcon, ButtonIconProps } from '@components/ButtonIcon'

type Props = TouchableOpacityProps &
  ButtonIconProps & {
    title: string
    type?: ButtonTypeStyleProps
  }

export function Button({ title, type = 'PRIMARY', nameIcon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {nameIcon !== undefined && <ButtonIcon nameIcon={nameIcon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}

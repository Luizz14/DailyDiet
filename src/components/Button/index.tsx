import { TouchableOpacityProps } from 'react-native'

import { ButtonTypeStyleProps, Container, Title } from './styles'
import { ButtonIcon, ButtonIconProps } from '@components/ButtonIcon'

type Props = TouchableOpacityProps &
  ButtonIconProps & {
    title: string
    type?: ButtonTypeStyleProps
    onPress?: () => void
  }

export function Button({
  title,
  type = 'PRIMARY',
  onPress,
  nameIcon,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest} onPress={onPress}>
      {nameIcon !== undefined && (
        <ButtonIcon nameIcon={nameIcon} type={type} onPress={onPress} />
      )}
      <Title type={type}>{title}</Title>
    </Container>
  )
}

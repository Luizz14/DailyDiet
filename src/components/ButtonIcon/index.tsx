import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

export type ButtonIconProps = TouchableOpacityProps & {
  nameIcon?: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({
  nameIcon,
  type = 'PRIMARY',
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={nameIcon} type={type} />
    </Container>
  )
}

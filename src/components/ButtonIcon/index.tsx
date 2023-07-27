import { TouchableOpacityProps } from 'react-native'

import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

export type ButtonIconProps = TouchableOpacityProps & {
  nameIcon?: string
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

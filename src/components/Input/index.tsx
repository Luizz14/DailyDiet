import { TextInputProps, TextInput } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, InputContent } from './styles'

import { Label } from '@components/TextLabel'

type Props = TextInputProps & {
  labelTitle?: string
  inputRef?: React.RefObject<TextInput>
  larger?: Boolean
}

export function Input({ labelTitle, larger = false, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container larger={larger}>
      {labelTitle !== undefined && <Label title={labelTitle} />}
      <InputContent
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
        larger={larger}
      />
    </Container>
  )
}

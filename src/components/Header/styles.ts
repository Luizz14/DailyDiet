import { ArrowLeft, CaretLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  color?: string | undefined
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 10px 24px;

  background-color: ${({ theme, color }) =>
    color !== undefined ? color : theme.COLORS.GRAY_500};
`

export const Content = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding-bottom: 25px;

  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const BackButton = styled(TouchableOpacity)`
  flex: 1;
  /* position: absolute; */

  max-width: 40px;
`

// Vai ser um icon de voltar
export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_200,
}))``

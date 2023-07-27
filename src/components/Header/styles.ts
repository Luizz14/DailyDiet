import { ArrowLeft, CaretLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`
export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: 700;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const BackButton = styled(TouchableOpacity).attrs(({ theme }) => ({
  flex: 1,
}))

// Vai ser um icon de voltar
export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_200,
}))``

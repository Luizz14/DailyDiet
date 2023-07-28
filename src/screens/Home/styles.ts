import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
  `}
`

export const Date = styled.Text`
  margin-top: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Content = styled.View`
  flex: 1;
`

import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Title = styled.Text`
  text-align: center;

  margin-top: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Content = styled.View`
  flex: 1;

  margin-top: -20px;
  border-radius: 20px;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const InfoContent = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 12px;
`

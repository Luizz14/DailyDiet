import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type SubtitleProps = {
  isBold?: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  text-align: center;
  margin-top: 35px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`

export const Subtitle = styled.Text<SubtitleProps>`
  text-align: center;
  margin-top: 8px;

  ${({ theme, isBold }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${isBold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const PhotoImage = styled.Image`
  width: 210px;
  height: 300px;

  margin: auto;
  margin-top: 40px;
`

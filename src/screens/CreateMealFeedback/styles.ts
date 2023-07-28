import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type FeedbackStyleProps = {
  healthy?: boolean
  isBold?: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text<FeedbackStyleProps>`
  text-align: center;
  margin-top: 35px;

  ${({ theme, healthy }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${healthy === true
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`

export const Subtitle = styled.Text<FeedbackStyleProps>`
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

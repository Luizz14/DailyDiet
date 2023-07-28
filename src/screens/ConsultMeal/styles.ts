import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  healthy?: boolean
  isBold?: boolean
}

export const Content = styled.View`
  flex: 1;

  padding: 24px;
  margin-top: -15px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Subtitle = styled.Text<Props>`
  margin-top: 8px;

  ${({ theme, isBold }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${isBold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Tag = styled.View`
  display: flex;
  flex-direction: row;

  max-width: 144px;
  padding: 10px 5px;

  margin-top: 24px;
  justify-content: center;

  border-radius: 50px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
`

export const TagTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_S};
  `}
`

export const Circle = styled.View<Props>`
  width: 8px;
  height: 8px;

  margin-right: 6px;
  align-self: center;

  border-radius: 8px;

  ${({ theme, healthy }) =>
    healthy === true
      ? `
      backgroundColor: ${theme.COLORS.GREEN_DARK};
    `
      : `backgroundColor: ${theme.COLORS.RED_DARK};`}
`

export const Footer = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

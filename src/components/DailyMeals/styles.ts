import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  margin-top: 40px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
  `}
`

export const Date = styled.Text`
  margin-top: 32px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`

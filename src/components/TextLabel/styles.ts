import styled, { css } from 'styled-components/native'

export const Container = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`

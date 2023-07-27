import styled, { css } from 'styled-components/native'

export type PropsContainer = {
  color: string
}

export const Container = styled.View<PropsContainer>`
  flex: 1;
  max-height: 107px;

  margin-top: 20px;
  justify-content: center;
  padding: 0px 15px;

  border-radius: 8px;
  background-color: ${({ theme, color }) =>
    color === '' ? theme.COLORS.GRAY_600 : `${color}`};
`
export const Title = styled.Text`
  text-align: center;
  font-weight: 700;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const SubTitle = styled.Text`
  margin-top: 2px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`

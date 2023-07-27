import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = {
  type?: 'GREEN' | 'RED'
  isActive?: Boolean
}

export const Container = styled.TouchableOpacity<ButtonTypeStyleProps>`
  flex: 1;
  flex-direction: row;

  min-height: 60px;
  max-height: 60px;

  margin: 6px 0px;
  padding: 5px;

  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ theme, isActive, type }) =>
    isActive && type === 'GREEN'
      ? `
      border: 1px ${theme.COLORS.GREEN_DARK};
      backgroundColor: ${theme.COLORS.GREEN_LIGHT};
    `
      : isActive && type === 'RED'
      ? `
      border: 1px ${theme.COLORS.RED_DARK};
      backgroundColor: ${theme.COLORS.RED_LIGHT};
    `
      : `
      backgroundColor: ${theme.COLORS.GRAY_600};
    `}
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Circle = styled.View<ButtonTypeStyleProps>`
  width: 8px;
  height: 8px;

  margin-right: 8px;

  border-radius: 8px;

  ${({ theme, type }) =>
    type === 'GREEN'
      ? `
      backgroundColor: ${theme.COLORS.GREEN_DARK};
    `
      : `backgroundColor: ${theme.COLORS.RED_DARK};`}
`

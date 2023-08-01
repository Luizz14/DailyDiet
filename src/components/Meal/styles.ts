import styled, { css } from 'styled-components/native'

export type StatusStylesProps = boolean

type Props = {
  healthy: StatusStylesProps
}

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;

  margin-top: 8px;
  border-radius: 6px;
  padding: 14px 16px 14px 12px;
  text-align: center;

  ${({ theme }) => css`
    border: 1px ${theme.COLORS.GRAY_500};
  `};
`

export const FoodName = styled.Text`
  flex: 1;

  align-self: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
  `}
`

export const DateFood = styled.Text`
  align-self: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Divider = styled.View`
  width: 2px;
  height: auto;

  margin: 0px 12px 0px 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 14px;
  opacity: 0.5;
  margin-left: 12px;

  align-self: center;

  background-color: ${({ theme, healthy }) =>
    healthy === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

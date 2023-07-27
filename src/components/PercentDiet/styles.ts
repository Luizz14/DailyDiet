import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export type PercentDietStylesProps = 'ABOVE' | 'DOWN'

type Props = {
  type: PercentDietStylesProps
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 30px;

  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === 'ABOVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`

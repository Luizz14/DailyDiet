import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  min-height: 60px;
  max-height: 60px;

  margin-top: 7px;
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  ${({ theme, type }) =>
    type === 'PRIMARY'
      ? css`
          color: ${theme.COLORS.GRAY_600};
          background-color: ${theme.COLORS.GRAY_200};
        `
      : css`
          background-color: ${theme.COLORS.WHITE};
          border: 2px ${theme.COLORS.GRAY_100};
        `}
`

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-weight: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  `}
  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`

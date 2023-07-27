import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  larger: Boolean
}

export const Container = styled.View<Props>`
  flex: 1;

  width: 100%;
  margin: 12px 0px;

  ${({ theme, larger }) => css`
    min-height: ${larger ? '140px' : '85px'};
    max-height: ${larger ? '140px' : '85px'};
  `}
`

export const InputContent = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  height: auto;

  border-radius: 6px;
  margin-bottom: 12px;
  padding: 16px;

  ${({ theme }) => css`
    border: 1px ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.BODY_M}px;
  `}
`

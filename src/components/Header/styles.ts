import { ArrowLeft, CaretLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  color?: string | undefined
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 10px 24px;

  background-color: ${({ theme, color }) =>
    color !== undefined ? color : theme.COLORS.GRAY_500};
`

export const Content = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding-bottom: 25px;

  justify-content: center;
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  align-self: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const SecondTitleButton = styled(TouchableOpacity)`
  align-self: center;
`
export const SecondTitle = styled.Text`
  text-align: right;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`

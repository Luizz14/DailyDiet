import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  width: 100%;
  max-height: 50px;

  justify-content: space-between;
`

export const Logo = styled.Image`
  background-color: transparent;
`

export const Profile = styled.View`
  width: 40px;
  height: 40px;

  ${({ theme }) => css`
    border: 2px ${theme.COLORS.GRAY_200};
    background-color: ${theme.COLORS.GRAY_400};
  `}

  border-radius: 40px;
`

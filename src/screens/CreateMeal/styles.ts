import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  flex: 1;

  padding: 24px;
  margin-top: 15px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const DataContent = styled.View`
  display: flex;
  flex-direction: row;

  gap: 20px;
`
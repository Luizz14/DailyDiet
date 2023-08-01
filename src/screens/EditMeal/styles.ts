import styled from 'styled-components/native'

export const Content = styled.View`
  flex: 1;

  padding: 24px;
  margin-top: -15px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const DataContent = styled.View`
  display: flex;
  flex-direction: row;

  gap: 20px;
`

export const Footer = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

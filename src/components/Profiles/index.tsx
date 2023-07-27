import { Container, Logo, Profile } from './styles'

import logo from '@assets/logo.png'

export function Profiles() {
  return (
    <Container>
      <Logo source={logo} />
      <Profile />
    </Container>
  )
}

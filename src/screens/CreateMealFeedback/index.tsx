import { Container, PhotoImage, Subtitle, Title } from './styles'

import { Button } from '@components/Button'
import WomanWalking from '@assets/WomanWalking.png'

export function CreateMealFeedback() {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>
        Você continua
        <Subtitle isBold> dentro da dieta. </Subtitle>
        Muito bem!
      </Subtitle>
      <PhotoImage source={WomanWalking} />
      <Button title='Ir para a página inicial' />
    </Container>
  )
}

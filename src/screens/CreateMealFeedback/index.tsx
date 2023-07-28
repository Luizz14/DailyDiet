import {
  Container,
  FeedbackStyleProps,
  PhotoImage,
  Subtitle,
  Title,
} from './styles'

import { Button } from '@components/Button'

import WomanWalking from '@assets/WomanWalking.png'
import MenSit from '@assets/MenSit.png'

export function CreateMealFeedback({ healthy }: FeedbackStyleProps) {
  return (
    <Container>
      {healthy === true ? (
        <>
          <Title>Continue assim!</Title>
          <Subtitle>
            Você continua
            <Subtitle isBold> dentro da dieta. </Subtitle>
            Muito bem!
          </Subtitle>
          <PhotoImage source={WomanWalking} />
        </>
      ) : (
        <>
          <Title>Que pena!</Title>
          <Subtitle>
            Você
            <Subtitle isBold> saiu da dieta </Subtitle>
            dessa vez, mas continue se esforçando e não desista!
          </Subtitle>
          <PhotoImage source={MenSit} />
        </>
      )}

      <Button title='Ir para a página inicial' />
    </Container>
  )
}

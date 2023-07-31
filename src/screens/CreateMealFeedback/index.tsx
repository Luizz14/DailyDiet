import {
  Container,
  FeedbackStyleProps,
  PhotoImage,
  Subtitle,
  Title,
} from './styles'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'

import WomanWalking from '@assets/WomanWalking.png'
import MenSit from '@assets/MenSit.png'

type RouteParams = {
  healthy: boolean
}

export function CreateMealFeedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { healthy } = route.params as RouteParams

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {healthy === true ? (
        <>
          <Title healthy>Continue assim!</Title>
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

      <Button title='Ir para a página inicial' onPress={handleGoToHome} />
    </Container>
  )
}

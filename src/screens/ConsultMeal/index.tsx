import {
  Circle,
  Content,
  Footer,
  Subtitle,
  Tag,
  TagTitle,
  Title,
} from './styles'
import { useTheme } from 'styled-components/native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'

type Props = {
  healthy?: Boolean
}

export function ConsultMeal({ healthy = true }: Props) {
  const { COLORS } = useTheme()

  return (
    <>
      <Header
        title='Refeição'
        color={healthy ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        showBackButton
      />

      <Content>
        <Title>Sanduíche</Title>

        <Subtitle>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Subtitle>
        <Subtitle isBold>Data e hora</Subtitle>
        <Subtitle>12/08/2022 às 16:00</Subtitle>

        <Tag>
          <Circle healthy={healthy as boolean} />
          <TagTitle>{healthy ? 'dentro da dieta' : 'fora da dieta'}</TagTitle>
        </Tag>

        <Footer>
          <Button title='Editar refeição' nameIcon='edit'></Button>
          <Button
            title='Excluir refeição'
            type='SECONDARY'
            nameIcon='delete-outline'
          ></Button>
        </Footer>
      </Content>
    </>
  )
}

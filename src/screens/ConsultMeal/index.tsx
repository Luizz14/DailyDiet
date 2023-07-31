import {
  Circle,
  Content,
  Footer,
  Subtitle,
  Tag,
  TagTitle,
  Title,
} from './styles'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { getMealById } from '@storage/meal/getMealById'

import { AppError } from '@utils/AppError'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

type RouteParams = {
  id: string
}

export function ConsultMeal() {
  const [meal, setMeal] = useState<MealStorageDTO>()

  const { COLORS } = useTheme()

  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchMeal() {
    try {
      const meal = await getMealById(id)

      setMeal(meal)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
      } else {
        Alert.alert('Refeição', 'Não foi possivel mostrar a refeição.')
      }
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal()
    }, [])
  )

  return (
    <>
      <Header
        title='Refeição'
        color={meal?.healthy ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        showBackButton
      />

      <Content>
        <Title>{meal?.name}</Title>

        <Subtitle>{meal?.description}</Subtitle>
        <Subtitle isBold>Data e hora</Subtitle>
        <Subtitle>
          {meal?.date} às {meal?.time}
        </Subtitle>

        <Tag>
          <Circle healthy={meal?.healthy} />
          <TagTitle>
            {meal?.healthy ? 'dentro da dieta' : 'fora da dieta'}
          </TagTitle>
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

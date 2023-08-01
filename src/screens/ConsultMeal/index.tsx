import {
  Circle,
  Content,
  Footer,
  Subtitle,
  Tag,
  TagTitle,
  Title,
} from './styles'
import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'

import { AppError } from '@utils/AppError'

import { getMealById } from '@storage/meal/getMealById'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { deleteMealById } from '@storage/meal/deleteMealById'

type RouteParams = {
  id: string
}

export function ConsultMeal() {
  const [meal, setMeal] = useState<MealStorageDTO>(Object)

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  const { COLORS } = useTheme()

  function handleGoBackToHome() {
    navigation.navigate('home')
  }

  function handleGoToEditMeal() {
    navigation.navigate('editMeal', { id })
  }

  async function handleRemoveMeal(id: string) {
    await deleteMealById(id)
    navigation.navigate('home')
  }

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
        color={meal.healthy ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        showBackButton
        showSecondTitle
        onPressArrow={handleGoBackToHome}
        onPressSecondTitle={handleGoToEditMeal}
      />

      <Content>
        <Title>{meal.name}</Title>

        <Subtitle>{meal.description}</Subtitle>
        <Subtitle isBold>Data e hora</Subtitle>
        <Subtitle>
          {meal.date} às {meal.time}
        </Subtitle>

        <Tag>
          <Circle healthy={meal.healthy} />
          <TagTitle>
            {meal.healthy ? 'dentro da dieta' : 'fora da dieta'}
          </TagTitle>
        </Tag>

        <Footer>
          {/* <Button title='Editar refeição' nameIcon='edit' /> */}
          <Button
            title='Excluir refeição'
            type='SECONDARY'
            nameIcon='delete-outline'
            onPress={() => handleRemoveMeal(meal.id)}
          />
        </Footer>
      </Content>
    </>
  )
}

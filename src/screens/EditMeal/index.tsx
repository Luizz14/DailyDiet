import { Content, DataContent, Footer } from './styles'
import { useCallback, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { Alert } from 'react-native'

import dayjs from 'dayjs'

import { Label } from '@components/TextLabel'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Options } from '@components/Options'
import { Button } from '@components/Button'

import { createMeal } from '@storage/meal/createMeal'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { AppError } from '@utils/AppError'
import { getMealById } from '@storage/meal/getMealById'
import { deleteMealById } from '@storage/meal/deleteMealById'

type RouteParams = {
  id: string
}

export function EditMeal() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<string>(dayjs().format('DD.MM.YY'))
  const [time, setTime] = useState<string>(dayjs().format('HH:mm'))
  const [healthy, setHealthy] = useState<boolean>(true)

  const routes = useRoute()
  const { id } = routes.params as RouteParams

  const navigation = useNavigation()
  function handleGoBackToHome() {
    navigation.navigate('consultMeal', { id })
  }

  async function fetchMeal() {
    try {
      const meal = await getMealById(id)

      setName(meal.name)
      setDescription(meal.description)
      setDate(meal.date)
      setTime(meal.time)
      setHealthy(meal.healthy)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeição', error.message)
      } else {
        Alert.alert('Refeição', 'Não foi possivel mostrar a refeição.')
      }
      console.log(error)
    }
  }

  async function handleEditMeal() {
    const newEditedMeal: MealStorageDTO = {
      id: id,
      name,
      description,
      date,
      time,
      healthy,
    }

    try {
      await deleteMealById(id)
      await createMeal(newEditedMeal)

      navigation.navigate('home')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert('Nova refeição', 'Não foi possivel editar essa refeição.')
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
        title='Editar refeição'
        onPressArrow={handleGoBackToHome}
        showBackButton
      ></Header>

      <Content>
        <Input labelTitle='Nome' onChangeText={setName} value={name} />
        <Input
          labelTitle='Descrição'
          onChangeText={setDescription}
          value={description}
          larger
        />

        <DataContent>
          <Input
            inputMode='numeric'
            labelTitle='Data'
            onChangeText={setDate}
            value={date}
          />
          <Input
            inputMode='numeric'
            labelTitle='Hora'
            onChangeText={setTime}
            value={time}
          />
        </DataContent>

        <Label title='Está dentro da dieta?' />
        <DataContent>
          <Options
            title='Sim'
            type='GREEN'
            isActive={healthy}
            onPress={() => setHealthy(true)}
          />
          <Options
            title='Não'
            type='RED'
            isActive={healthy === false}
            onPress={() => setHealthy(false)}
          />
        </DataContent>

        <Footer>
          <Button title='Salvar alterações' onPress={handleEditMeal} />
        </Footer>
      </Content>
    </>
  )
}

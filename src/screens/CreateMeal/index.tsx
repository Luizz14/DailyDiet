import { Content, DataContent, Footer } from './styles'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import dayjs from 'dayjs'

import { Label } from '@components/TextLabel'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Options } from '@components/Options'
import { Button } from '@components/Button'

import { createMeal } from '@storage/meal/createMeal'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { getMealsByDate } from '@storage/meal/getMealsByDate'
import { AppError } from '@utils/AppError'

export function CreateMeal() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<string>(dayjs().format('DD.MM.YY'))
  const [time, setTime] = useState<string>(dayjs().format('HH:mm'))
  const [healthy, setHealthy] = useState<boolean>(true)

  const navigation = useNavigation()

  async function handleCreateMeal() {
    const newMeal: MealStorageDTO = {
      id: String(Math.round(Math.random())),
      name,
      description,
      date,
      time,
      healthy,
    }

    try {
      await createMeal(newMeal)

      navigation.navigate('createMealFeedback', { healthy })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert(
          'Nova refeição',
          'Não foi possivel criar uma nova refeição.'
        )
      }
      console.log(error)
    }
  }

  return (
    <>
      <Header title='Nova refeição' showBackButton></Header>

      <Content>
        <Input labelTitle='Nome' onChangeText={setName} />
        <Input labelTitle='Descrição' onChangeText={setDescription} larger />

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
          <Button
            title='Cadastrar refeição'
            nameIcon='add'
            onPress={handleCreateMeal}
          />
        </Footer>
      </Content>
    </>
  )
}

import { SectionList } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { Container, Content, Date, Title } from './styles'

import { Profiles } from '@components/Profiles'
import { DataInfo } from '@components/DataInfo'
import { Button } from '@components/Button'
import { Meal } from '@components/Meal'

import { getAllDate } from '@storage/date/getAllDate'
import { DateStorageDTO } from '@storage/date/DateStorageDTO'
import { deleteAllDate } from '@storage/date/deleteAllDate'

type RouteParams = {
  percent: number
}

export function Home() {
  const [healthy, setHealthy] = useState<boolean>()
  const [data, setData] = useState<DateStorageDTO[]>([])

  const percent = 92
  const navigation = useNavigation()

  const { COLORS } = useTheme()

  async function fetchMeals() {
    try {
      const storedMeals = await getAllDate()

      console.log(
        data.forEach((x) => {
          x.data
        })
      )
      console.log(setData)

      setData(storedMeals)
    } catch (error) {
      console.log(error)
    }
  }

  function handleNewMeal() {
    navigation.navigate('createMeal')
  }

  function handleSelectMeal(id: string) {
    navigation.navigate('consultMeal', { id })
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  return (
    <Container>
      <Profiles />
      <DataInfo
        color={healthy === true ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        title={String(percent + '%')}
        subTitle='das refeições dentro da dieta'
      />

      <Content>
        <Title>Refeições</Title>
        <Button title='Nova refeição' nameIcon='add' onPress={handleNewMeal} />

        <SectionList
          style={{ marginTop: 12 }}
          sections={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Meal
              mealName={item.name}
              mealTime={item.time}
              healthy={item.healthy}
              onPress={() => handleSelectMeal(item.id)}
            />
          )}
          renderSectionHeader={({ section }) => <Date>{section.title}</Date>}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  )
}

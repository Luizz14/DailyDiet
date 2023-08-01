import { SectionList } from 'react-native'
import { useCallback, useState } from 'react'
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
import { getPercentOfTheMeals } from '@storage/meal/getPercentOfTheMeals'
import { StatisticStorageDTO } from '@storage/meal/StatisticStorageDTO'

export function Home() {
  const [data, setData] = useState<DateStorageDTO[]>([])
  const [statistics, setStatistics] = useState<StatisticStorageDTO>(Object)

  const navigation = useNavigation()

  const { COLORS } = useTheme()

  async function fetchMeals() {
    try {
      const storedMeals = await getAllDate()

      setData(storedMeals)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchPercent() {
    const statistics = await getPercentOfTheMeals()
    setStatistics(statistics)
  }

  function handleGoToStatistic() {
    navigation.navigate('statistics')
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
      fetchPercent()
    }, [])
  )

  return (
    <Container>
      <Profiles />
      <DataInfo
        color={
          statistics.percentOfTheMeals >= 60
            ? COLORS.GREEN_LIGHT
            : COLORS.RED_LIGHT
        }
        title={String(statistics.percentOfTheMeals + '%')}
        subTitle='das refeições dentro da dieta'
        onPress={handleGoToStatistic}
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

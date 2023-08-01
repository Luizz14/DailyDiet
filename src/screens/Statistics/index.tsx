import { useTheme } from 'styled-components/native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'

import { Container, Content, InfoContent, Title } from './styles'

import { DataInfo } from '@components/DataInfo'
import { StatisticStorageDTO } from '@storage/meal/StatisticStorageDTO'
import { getPercentOfTheMeals } from '@storage/meal/getPercentOfTheMeals'

export function Statistics() {
  const [statistics, setStatistics] = useState<StatisticStorageDTO>(Object)

  const navigation = useNavigation()

  const { COLORS } = useTheme()

  function handleGoToHome() {
    navigation.navigate('home')
  }

  async function fetchPercent() {
    const statistics = await getPercentOfTheMeals()
    setStatistics(statistics)
  }

  useFocusEffect(
    useCallback(() => {
      fetchPercent()
    }, [])
  )
  return (
    <Container>
      <Content>
        <DataInfo
          color={
            statistics.percentOfTheMeals >= 60
              ? COLORS.GREEN_LIGHT
              : COLORS.RED_LIGHT
          }
          title={String(statistics.percentOfTheMeals + '%')}
          subTitle='das refeições dentro da dieta'
          onPress={handleGoToHome}
        />
        <Title>Estatísticas gerais</Title>
        <DataInfo
          title={String(statistics.mealsSequence)}
          subTitle='melhor sequência de pratos dentro da dieta'
        />
        <DataInfo
          title={String(statistics.sumAllMeals)}
          subTitle='refeições registradas'
        />
        <InfoContent>
          <DataInfo
            color={COLORS.GREEN_LIGHT}
            title={String(statistics.mealsHealthy)}
            subTitle='refeições dentro da dieta'
          ></DataInfo>
          <DataInfo
            color={COLORS.RED_LIGHT}
            title={String(statistics.mealsUnHealthy)}
            subTitle='refeições fora da dieta'
          ></DataInfo>
        </InfoContent>
      </Content>
    </Container>
  )
}

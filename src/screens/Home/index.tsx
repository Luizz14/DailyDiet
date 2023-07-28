import { SectionList } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { Container, Content, Date, Title } from './styles'

import { Profiles } from '@components/Profiles'
import { DataInfo } from '@components/DataInfo'
import { Button } from '@components/Button'
import { Meal } from '@components/Meal'
import { StatusStylesProps } from '@components/Meal/styles'

type RouteParams = {
  percent: number
}

export function Home() {
  const [healthy, setHealthy] = useState<boolean>()

  const percent = 92

  const navigation = useNavigation()
  const { COLORS } = useTheme()

  const DATA = [
    {
      title: '12.03.23',
      data: [
        {
          name: 'WheyP',
          healthy: true,
        },
      ],
    },
    {
      title: '13.03.23',
      data: [
        {
          name: 'Macarrao',
          healthy: true,
        },
      ],
    },
  ]

  function handleNewMeal() {
    navigation.navigate('createMeal')
  }

  // const route = useRoute()
  // const { percent } = route.params as RouteParams

  // function fetchDiet() {
  //   percent >= 80 ? setType('ABOVE') : setType('DOWN')
  // }

  // useEffect(() => {
  //   fetchDiet()
  // }, [percent])

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
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <Meal mealName={item.name} healthy={item.healthy} />
          )}
          renderSectionHeader={({ section }) => <Date>{section.title}</Date>}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  )
}

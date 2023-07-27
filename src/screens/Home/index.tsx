import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { Container } from './styles'

import { PercentDiet } from '@components/PercentDiet'
import { Profiles } from '@components/Profiles'
import { DailyMeals } from '@components/DailyMeals'
import { PercentDietStylesProps } from '@components/PercentDiet/styles'
import { DataInfo } from '@components/DataInfo'

// type RouteParams = {
//   percent: number
// }

export function Home() {
  // const route = useRoute()
  const { COLORS } = useTheme()

  // const { percent } = route.params as RouteParams
  const percent = 92

  const [type, setType] = useState<PercentDietStylesProps>('ABOVE')

  function fetchDiet() {
    percent >= 80 ? setType('ABOVE') : setType('DOWN')
  }

  useEffect(() => {
    fetchDiet()
  }, [percent])

  return (
    <Container>
      <Profiles />
      <DataInfo
        color={type === 'ABOVE' ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        title={String(percent + '%')}
        subTitle='das refeições dentro da dieta'
      />
      <DailyMeals />
    </Container>
  )
}

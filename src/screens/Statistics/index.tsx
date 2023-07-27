import { useTheme } from 'styled-components/native'
import { useEffect, useState } from 'react'

import { Container, Content, InfoContent, Title } from './styles'

import { PercentDiet } from '@components/PercentDiet'
import { DataInfo } from '@components/DataInfo'

export function Statistics() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <PercentDiet title={'93.5'} />
      <Content>
        <Title>Estatísticas gerais</Title>
        <DataInfo
          title='22'
          subTitle='melhor sequência de pratos dentro da dieta'
        />
        <DataInfo title='102' subTitle='refeições registradas' />
        <InfoContent>
          <DataInfo
            color={COLORS.GREEN_LIGHT}
            title='99'
            subTitle='refeições dentro da dieta'
          ></DataInfo>
          <DataInfo
            color={COLORS.RED_LIGHT}
            title='10'
            subTitle='refeições fora da dieta'
          ></DataInfo>
        </InfoContent>
      </Content>
    </Container>
  )
}

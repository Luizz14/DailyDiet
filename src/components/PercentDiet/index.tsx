import { useEffect, useState } from 'react'
import {
  PercentDietStylesProps,
  Container,
  Icon,
  SubTitle,
  Title,
} from './styles'

type Props = {
  title: string
  color?: string
}

export function PercentDiet({ title, color }: Props) {
  return (
    <Container type={color as PercentDietStylesProps}>
      <Icon />
      <Title>{title}</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}

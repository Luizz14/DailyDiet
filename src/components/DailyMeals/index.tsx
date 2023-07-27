import { SectionList } from 'react-native'

import { Container, Date, Title } from './styles'

import { Meal } from '@components/Meal'
import { Button } from '@components/Button'
import { StatusStylesProps } from '@components/Meal/styles'

export function DailyMeals() {
  const DATA = [
    {
      title: '12.08.23',
      data: ['Pizza', 'Burger', 'Risotto'],
      type: 'GOOD',
    },
    {
      title: '11.08.23',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      type: 'BAD',
    },
    {
      title: '10.08.23',
      data: ['Water', 'Coke', 'Beer'],
      type: 'GOOD',
    },
    {
      title: '09.08.23',
      data: ['Cheese Cake', 'Ice Cream'],
      type: 'BAD',
    },
  ]

  return (
    <Container>
      <Title>Refeições</Title>
      <Button title='Nova refeição' />

      <SectionList
        sections={DATA}
        keyExtractor={(title, index) => title + index}
        renderItem={({ item, section }) => (
          <Meal mealName={item} type={section.type as StatusStylesProps} />
        )}
        renderSectionHeader={({ section: { title } }) => <Date>{title}</Date>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

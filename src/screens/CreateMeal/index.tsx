import { Content, DataContent, Footer } from './styles'
import { useState } from 'react'

import { Label } from '@components/TextLabel'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Options } from '@components/Options'
import { Button } from '@components/Button'

import { createMeal } from '@storage/meal/createMeal'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { getAllData } from '@storage/date/getAllData'
import { getAllMeal } from '@storage/meal/getAllMeal'

export function CreateMeal() {
  const [inDiet, setInDiet] = useState<boolean | undefined>(undefined)
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  async function handleCreateMeal() {
    try {
      await createMeal(name, description, 'po', '23', inDiet)
      console.log(getAllMeal('23'))
    } catch (error) {
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
          <Input inputMode='numeric' labelTitle='Data' />
          <Input inputMode='numeric' labelTitle='Hora' />
        </DataContent>

        <Label title='Está dentro da dieta?' />
        <DataContent>
          <Options
            title='Sim'
            type='GREEN'
            isActive={inDiet}
            onPress={() => setInDiet(true)}
          />
          <Options
            title='Não'
            type='RED'
            isActive={inDiet === false}
            onPress={() => setInDiet(false)}
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

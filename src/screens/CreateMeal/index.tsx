import { Container, Content, DataContent } from './styles'

import { Label } from '@components/TextLabel'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Options } from '@components/Options'
import { Button } from '@components/Button'

export function CreateMeal() {
  return (
    <Container>
      <Header title='Nova refeição' showBackButton></Header>
      <Content>
        <Input labelTitle='Nome' />
        <Input labelTitle='Descrição' larger />

        <DataContent>
          <Input inputMode='numeric' labelTitle='Data' />
          <Input inputMode='numeric' labelTitle='Hora' />
        </DataContent>

        <Label title='Está dentro da dieta?' />
        <DataContent>
          <Options title='Sim' type='GREEN' />
          <Options title='Não' type='RED' />
        </DataContent>

        <Button title='Cadastrar refeição' nameIcon='add' />
      </Content>
    </Container>
  )
}

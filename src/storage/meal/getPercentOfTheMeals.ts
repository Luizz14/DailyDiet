import { MealStorageDTO } from './MealStorageDTO'
import { getAllMeals } from './getAllMeals'

export async function getPercentOfTheMeals() {
  try {
    const allTheMeals = (await getAllMeals()).flat()

    const mealsSequence = sequence(allTheMeals)

    const sumAllMeals = allTheMeals.length

    const mealsHealthy = allTheMeals.filter(
      ({ healthy }) => healthy === true
    ).length

    const mealsUnHealthy = sumAllMeals - mealsHealthy

    const percentOfTheMeals = Math.round((mealsHealthy / sumAllMeals) * 100)

    const statistic = {
      sumAllMeals,
      mealsHealthy,
      mealsUnHealthy,
      percentOfTheMeals,
      mealsSequence,
    }

    return statistic
  } catch (error) {
    throw error
  }
}

function sequence(allTheMeals: MealStorageDTO[]) {
  let maxSequence = 0 // guarda a maior sequência encontrada
  let currentSequence = 0 // guarda a sequência atual
  allTheMeals.forEach(({ healthy }) => {
    if (healthy) {
      // se o elemento é verdadeiro, incrementa a sequência atual
      currentSequence++
    } else {
      // se o elemento é falso, compara a sequência atual com a maior sequência
      if (currentSequence > maxSequence) {
        // se a sequência atual é maior que a maior sequência, atualiza a maior sequência
        maxSequence = currentSequence
      }
      // zera a sequência atual
      currentSequence = 0
    }
  })
  // verifica se a última sequência é maior que a maior sequência
  if (currentSequence > maxSequence) {
    maxSequence = currentSequence
  }
  return maxSequence
}

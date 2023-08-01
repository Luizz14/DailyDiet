import { MealStorageDTO } from './MealStorageDTO'

import { getAllDate } from '@storage/date/getAllDate'
import { AppError } from '@utils/AppError'

export async function getMealsByDate(date: string) {
  try {
    const storedDates = await getAllDate()
    const storageDate = storedDates.find(({ title }) => title === date)

    if (storageDate === undefined) {
      throw new AppError(`Não foi possivel pegar as refeições pela data.`)
    }

    const storedMeals = storageDate.data
    const meals: MealStorageDTO[] = storedMeals ? storedMeals : []

    return meals
  } catch (error) {
    throw error
  }
}

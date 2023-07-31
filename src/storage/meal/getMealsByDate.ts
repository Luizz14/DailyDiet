import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealStorageDTO } from './MealStorageDTO'
import { DATE_COLECTION } from '@storage/storage.config'
import { getAllDate } from '@storage/date/getAllDate'
import { AppError } from '@utils/AppError'

export async function getMealsByDate(date: string) {
  try {
    const storedDates = await getAllDate()

    const storageDate = storedDates.find(({ title }) => title === date)

    if (storageDate === undefined || null) {
      throw new AppError('Não foi possivel pegar as refeições pela data.')
    }

    const meals: MealStorageDTO[] = storageDate?.data

    return meals
  } catch (error) {
    throw error
  }
}

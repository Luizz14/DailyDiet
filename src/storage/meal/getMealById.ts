import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealStorageDTO } from './MealStorageDTO'
import { DATE_COLECTION } from '@storage/storage.config'
import { getAllDate } from '@storage/date/getAllDate'
import { getDateByTitle } from '@storage/date/getDateByTitle'
import { AppError } from '@utils/AppError'

export async function getMealById(id: string) {
  try {
    const storedDate = await getAllDate()

    const date = storedDate.find(({ data }) => {
      return data.find((item) => item.id === id)
    })

    if (date === undefined || null) {
      throw new AppError('Não foi possivel achar a data da refeição.')
    }

    const meal = date.data.find((item) => item.id === id)

    if (meal === undefined || null) {
      throw new AppError('Não foi possivel achar a refeição.')
    }
    console.log(meal)
    return meal
  } catch (error) {
    throw error
  }
}

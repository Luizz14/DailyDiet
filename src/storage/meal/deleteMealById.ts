import AsyncStorage from '@react-native-async-storage/async-storage'

import { getMealsByDate } from './getMealsByDate'

import { AppError } from '@utils/AppError'

import { getDateByMealId } from '@storage/date/getDateByMealId'
import { DATE_COLECTION } from '@storage/storage.config'
import { deleteDateByTitle } from '@storage/date/deleteDateByTitle'

export async function deleteMealById(id: string) {
  try {
    const storedDate = await getDateByMealId(id)

    const storedMeals = await getMealsByDate(storedDate.title)
    const newDates = await deleteDateByTitle(storedDate.title)

    const newStoredMeals = storedMeals.filter((item) => item.id !== id)

    const newStorage = {
      title: storedDate.title,
      data: [...newStoredMeals],
    }

    if (storedMeals.length === 1) {
      await AsyncStorage.setItem(DATE_COLECTION, JSON.stringify([...newDates]))
    } else {
      await AsyncStorage.setItem(
        DATE_COLECTION,
        JSON.stringify([...newDates, newStorage])
      )
    }
  } catch (error) {
    throw error
  }
}

import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealStorageDTO } from './MealStorageDTO'
import { getMealsByDate } from './getMealsByDate'

import { AppError } from '@utils/AppError'
import { getAllDate } from '@storage/date/getAllDate'
import { DATE_COLECTION } from '@storage/storage.config'
import { getDateByTitle } from '@storage/date/getDateByTitle'

export async function createMeal(meal: MealStorageDTO) {
  try {
    if (meal.name.trim().length === 0) {
      throw new AppError('Insira um nome para a refeição.')
    }

    const storedDates = await getAllDate()
    const storedDate = await getDateByTitle(meal.date)

    if (!storedDates.find((item) => item.title === meal.date)) {
      const date = {
        title: meal.date,
        data: [meal],
      }

      await AsyncStorage.setItem(
        `${DATE_COLECTION}`,
        JSON.stringify([date, ...storedDates])
      )
    } else {
      const storage = storedDates.filter((item) => item.title !== meal.date)

      const storedMeals = await getMealsByDate(meal.date)
      const newStorage = {
        title: meal.date,
        data: [...storedMeals, meal],
      }

      await AsyncStorage.setItem(
        DATE_COLECTION,
        JSON.stringify([newStorage, ...storage])
      )
    }
  } catch (error) {
    throw error
  }
}

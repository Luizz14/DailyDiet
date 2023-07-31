import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealStorageDTO } from './MealStorageDTO'
import { getMealsByDate } from './getMealsByDate'
import { AppError } from '@utils/AppError'

import { DateStorageDTO } from '@storage/date/DateStorageDTO'
import { getAllDate } from '@storage/date/getAllDate'
import { createDate } from '@storage/date/createDate'
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

      console.log('Criando nova data', date)
      await AsyncStorage.setItem(
        `${DATE_COLECTION}`,
        JSON.stringify([date, ...storedDates])
      )
    } else {
      const storage = storedDate.filter((item) => item.title !== meal.date)

      const storedMeals = await getMealsByDate(meal.date)
      const newStorage = {
        title: meal.date,
        data: [...storedMeals, meal],
      }

      await AsyncStorage.setItem(
        DATE_COLECTION,
        JSON.stringify([...storage, newStorage])
      )
    }
  } catch (error) {
    throw error
  }
}

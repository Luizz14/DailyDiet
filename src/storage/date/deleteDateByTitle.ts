import AsyncStorage from '@react-native-async-storage/async-storage'

import { getAllDate } from './getAllDate'
import { AppError } from '@utils/AppError'
import { DATE_COLECTION } from '@storage/storage.config'

export async function deleteDateByTitle(title: string) {
  try {
    const storedDates = await getAllDate()

    const storedNewDates = storedDates.filter((item) => item.title !== title)

    if (!storedNewDates) {
      throw new AppError('Não foi possivel encontrar a data pelo título.')
    }

    return storedNewDates
  } catch (error) {
    throw error
  }
}

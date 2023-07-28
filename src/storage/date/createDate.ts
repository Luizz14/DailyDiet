import AsyncStorage from '@react-native-async-storage/async-storage'

import { DATE_COLECTION } from '@storage/storage.config'
import { getAllDate } from './getAllDate'
import { DateStorageDTO } from './DateStorageDTO'

export async function createDate(date: DateStorageDTO) {
  const newDate = {
    title: date,
    data: [],
  }

  try {
    const storedDates = await getAllDate()

    const newStorage = JSON.stringify([...storedDates, newDate])
    await AsyncStorage.setItem(`${DATE_COLECTION}`, newStorage)
  } catch (error) {
    throw error
  }
}

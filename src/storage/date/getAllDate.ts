import AsyncStorage from '@react-native-async-storage/async-storage'
import { DATE_COLECTION } from '@storage/storage.config'
import { DateStorageDTO } from './DateStorageDTO'

export async function getAllDate() {
  try {
    const storedDates = await AsyncStorage.getItem(DATE_COLECTION)

    const dates: DateStorageDTO[] = storedDates ? JSON.parse(storedDates) : []
    return dates
  } catch (error) {
    throw error
  }
}

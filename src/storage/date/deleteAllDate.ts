import AsyncStorage from '@react-native-async-storage/async-storage'
import { DATE_COLECTION } from '@storage/storage.config'

export async function deleteAllDate() {
  try {
    await AsyncStorage.removeItem(DATE_COLECTION)
  } catch (error) {
    throw error
  }
}

import { DateStorageDTO } from './DateStorageDTO'
import { getAllDate } from './getAllDate'

export async function getDateByTitle(titleName: string) {
  try {
    const storedDates = await getAllDate()

    const dates = storedDates.filter(({ title }) => title === titleName)

    // const meals = dates.forEach((item) => item.data)

    // const date: DateStorageDTO[] = dates ? dates : []

    return dates
  } catch (error) {
    throw error
  }
}

import { getAllDate } from './getAllDate'

export async function getDateByTitle(titleName: string) {
  try {
    const storedDates = await getAllDate()

    const dates = storedDates.filter(({ title }) => title === titleName)

    return dates
  } catch (error) {
    throw error
  }
}

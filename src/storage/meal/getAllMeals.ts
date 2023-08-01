import { getAllDate } from '@storage/date/getAllDate'

export async function getAllMeals() {
  try {
    const allDates = await getAllDate()

    const allMeals = allDates.map(({ data }) => data)

    return allMeals
  } catch (error) {
    throw error
  }
}

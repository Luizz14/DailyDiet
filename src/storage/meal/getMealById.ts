import { getDateByMealId } from '@storage/date/getDateByMealId'
import { AppError } from '@utils/AppError'

export async function getMealById(id: string) {
  try {
    const date = await getDateByMealId(id)
    const meal = date.data.find((item) => item.id === id)

    if (meal === undefined || null) {
      throw new AppError('Não foi possivel achar a refeição.')
    }

    return meal
  } catch (error) {
    throw error
  }
}

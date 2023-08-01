import { getAllDate } from '@storage/date/getAllDate'
import { AppError } from '@utils/AppError'

export async function getDateByMealId(id: string) {
  try {
    const storedDate = await getAllDate()

    const date = storedDate.find(({ data }) => {
      return data.find((item) => item.id === id)
    })

    if (!date) {
      throw new AppError('Não foi possivel achar a data da refeição.')
    }

    return date
  } catch (error) {
    throw error
  }
}

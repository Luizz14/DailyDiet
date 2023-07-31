export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: {
        percent: number
      }
      createMeal: undefined
      createMealFeedback: {
        healthy: boolean
      }
      consultMeal: {
        id: string
      }
      editMeal: {
        nameMeal: string
      }
    }
  }
}

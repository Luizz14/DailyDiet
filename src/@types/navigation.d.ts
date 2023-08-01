export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      createMeal: undefined
      createMealFeedback: {
        healthy: boolean
      }
      consultMeal: {
        id: string
      }
      editMeal: {
        id: string
      }
    }
  }
}

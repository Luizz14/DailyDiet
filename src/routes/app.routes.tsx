import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { CreateMeal } from '@screens/CreateMeal'
import { ConsultMeal } from '@screens/ConsultMeal'
import { CreateMealFeedback } from '@screens/CreateMealFeedback'
import { EditMeal } from '@screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Screen
        name='statistics'
        component={Statistics}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Screen
        name='createMeal'
        component={CreateMeal}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Screen
        name='createMealFeedback'
        component={CreateMealFeedback}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Screen
        name='consultMeal'
        component={ConsultMeal}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Screen
        name='editMeal'
        component={EditMeal}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Navigator>
  )
}

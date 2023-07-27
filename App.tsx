import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
// import {
//   useFonts,
//   NunitoSans_400Regular,
//   NunitoSans_700Bold,
// } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'
import { Routes } from 'src/routes'

import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'
import { CreateMeal } from '@screens/CreateMeal'
import { CreateMealFeedback } from '@screens/CreateMealFeedback'

export default function App() {
  // const [fontIsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
      />
      <CreateMealFeedback />
      {/* {fontIsLoaded ? <Routes /> : <Loading />} */}
    </ThemeProvider>
  )
}

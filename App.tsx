import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

// import {
//   useFonts,
//   NunitoSans_400Regular,
//   NunitoSans_700Bold,
// } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'
import { Routes } from './src/routes'

export default function App() {
  // const [fontIsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent
      />
      <Routes />
      {/* {fontIsLoaded ? <Routes /> : <Loading />} */}
    </ThemeProvider>
  )
}

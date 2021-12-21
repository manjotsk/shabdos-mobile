import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'

import App from './src/App'

enableScreens()

AppRegistry.registerComponent( 'App', () => App )

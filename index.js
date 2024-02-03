/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {useEffect} from 'react';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

const AppWrapper = () => {
  useEffect(() => {
    // Hide the splash screen after the component has mounted
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => AppWrapper);

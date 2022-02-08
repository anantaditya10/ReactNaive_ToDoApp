import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ErrorScreen from './screens/ErrorScreen';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Error: ErrorScreen,
  });
const App = createAppContainer(LoginStack)
export default () => {
  return <App />
};

import  React from 'react';

import Login from './src/screens/login';
import HomePage from './src/screens/homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from 'native-base';

constStack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator screenOptions= {{headerShown: false}}>
      <Stack.Screen name="Login" component= {Login} />
      <Stack.Screen name="HomePage" component= {HomePage} />
    </Stack.Navigator>
  )
}

export default() =>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
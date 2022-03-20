import React from 'react';

import LoginScreen from './src/screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/screens/Register';
import Home from './src/Home';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

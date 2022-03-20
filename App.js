import React from 'react';

import LoginScreen from './src/screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Register from './src/screens/Register';
import Home from './src/screens/BottomScreen/Home';
import Doubt from './src/screens/BottomScreen/Doubt';
import Results from './src/screens/BottomScreen/Results';
import NotificationsScreen from './src/screens/BottomScreen/Notifactions';
import Profile from './src/screens/BottomScreen/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import VerifyScreen from './src/screens/VerifyScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name='Otp' component={VerifyScreen} />
      <Stack.Screen name="Tabs" component={MyTab} />
    </Stack.Navigator>
  )
}
function MyTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }

    }
      initialRouteName="Home"
      activeColor='#2E3E5E'
      inactiveColor='#758BAF'
      shifting={false}
      barStyle={{ backgroundColor: '#E1EBFB' }}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name='Results' component={Results}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='assignment' color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name='Doubt' component={Doubt}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="QuestionMark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name='Notification' component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

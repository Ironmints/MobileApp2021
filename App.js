import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from './app/Icons';
import MyScreen from './app/MyScreen';
import ActionScreen from './app/ActionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MyScreen') {
              iconName = !focused ? Icons.event : Icons.eventFocused
            } else if (route.name === 'ActionScreen') {
              iconName = !focused ? Icons.collection : Icons.collectionFocused;
            }

            return <Image style={{color: color, width: size, height: size}} source={{uri: iconName}} />
          }
        })}>
        <Tab.Screen name="MyScreen" component={MyScreen} />
        <Tab.Screen name="ActionScreen" component={ActionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

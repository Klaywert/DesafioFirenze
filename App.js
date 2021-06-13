import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home, Search, Achievements, Profile } from './src/screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

// "main" do app, que starta a aplicação e dá vida as navtabs
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={true} activeColor="#ffffff"
      barStyle={{ backgroundColor: '#62555a' }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        
        <Tab.Screen name="Search" component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name="Achievements" component={Achievements} options={{
          tabBarLabel: 'Achievements',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
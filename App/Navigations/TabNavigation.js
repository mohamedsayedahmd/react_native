import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 


// components
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';

export default function TabNavigation() {

  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false
    }} >
      <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <FontAwesome  name="home" color={color} size={size} />
                    ),
                  }}/>
      <Tab.Screen name="Fav" component={Fav} 
      options={{
        tabBarLabel: 'favorite',
        tabBarIcon: ({ color, size }) => (
          <Fontisto  name="favorite" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Search" component={Search} 
      options={{
        tabBarLabel: 'search',
        tabBarIcon: ({ color, size }) => (
          <Feather  name="search" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <AntDesign  name="profile" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  )
}
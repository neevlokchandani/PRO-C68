import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import HomeScreen from './screens/s1'
import SearchScreen from './screens/s2'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator =createBottomTabNavigator({
  FaceBook:{screen:HomeScreen},
  InstaGram:{screen:SearchScreen}
});
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

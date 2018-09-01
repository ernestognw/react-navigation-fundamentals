import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home/',
      navigationOptions: {
        title: 'Esta es la home'
      }
    },
    About,
    Profile
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Un título genérico',
      headerTitleAllowFontScaling: true,
      // header: <Text style={{color:'white'}}>Hello world</Text>
      headerBackTitle: 'Atrás',
      // headerBackImage: <Text>xd</Text>,
      gesturesEnabled: true,
    },
    initialRouteKey: 'home',
    initialRouteParams: {
      nombre: 'Ernesto García'
    },
    // headerMode: float screen none
    headerMode: 'screen',
    // mode: modal card
    mode: 'screen',
    // cardStyle: {
    //   borderWidth: 2,
    //   backgroundColor: 'red',
    // },
    // headerTransitionPreset: 'uikit'
  }
);

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    Login: {
      screen: Login,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

export default Main;
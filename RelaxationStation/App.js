import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './HomeScreen';
import QuoteScreen from './QuoteScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  QuoteScreen: {
    screen: QuoteScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

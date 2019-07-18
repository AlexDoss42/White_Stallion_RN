import React from 'react'

import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Components/HomeScreen'
import ProfileScreen from './Components/ProfileScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
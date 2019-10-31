import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screen/HomeScreen";
import DriverScreen from "./src/screen/DriverScreen";
import PassengerScreen from "./src/screen/PassengerScreen";
import ConfirmedScreen from "./src/screen/ConfirmedScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Driver: DriverScreen,
    Passenger: PassengerScreen,
    Confirmed: ConfirmedScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#009648',
      headerStyle: {
        backgroundColor: '#fff',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
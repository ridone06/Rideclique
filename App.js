import React, { Component } from 'react';

import { Provider } from 'react-redux'
import configStore from './src/configStore'

import  { createStackNavigator }  from 'react-navigation';
import { CreateEvent, ModalGooglePlaces } from './src/component/container'

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: CreateEvent
  },
  ModalGooglePlaces: {
    screen: ModalGooglePlaces,
    mode: 'modal',
    headerMode: 'none',
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={configStore}>
          <AppStackNavigator />
      </Provider>
      // <AppStackNavigator />
    );
  }
}

export default App;
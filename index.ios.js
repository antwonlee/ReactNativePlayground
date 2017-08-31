import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import VolunteerList from './src/components/VolunteerList';

export default class ReactNativePlayground extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Thrive Ministry'} />
        <VolunteerList />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativePlayground', () => ReactNativePlayground);

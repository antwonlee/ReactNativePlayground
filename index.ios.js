import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header'

export default class ReactNativePlayground extends Component {
  render() {
    return (
      <Header />
    );
  }
}

AppRegistry.registerComponent('ReactNativePlayground', () => ReactNativePlayground);

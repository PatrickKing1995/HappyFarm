/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabComponent} from './src/route/TabComponent';
import {Login_HomeNavigation} from './src/route/StackComponent'
import LoadingComponent from './src/components/LoadingComponent'


export default class App extends Component{
  render() {
    return (
        <Login_HomeNavigation/>
    )
  }
}

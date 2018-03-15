import React, { Component } from 'react'
import { Text, View,BackHandler, TouchableOpacity,Alert,AsyncStorage,StatusBar,ImageBackground,StyleSheet } from 'react-native'
import {DevicesHeaderComponent} from '../route/HeaderComponent'

export default class DeviceComponent extends Component {

  openAddDevice = () => {
    this.props.navigation.navigate('Screen_AddDevice');
  };

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
      <View style={{flex: 1,}}>
        <DevicesHeaderComponent add={() => this.openAddDevice()}/>
        <View style={{height: "89%"}}>
          
        </View>
      </View>
      </ImageBackground>
    )
  }
}

const styles =StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
})
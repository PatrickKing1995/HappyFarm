import React, { Component } from 'react'
import { Text, View,BackHandler, TouchableOpacity,Alert,AsyncStorage,StatusBar,ImageBackground,StyleSheet } from 'react-native'
import {ARHeaderComponent} from '../route/HeaderComponent'

const ACCESS_TOKEN = "access_token";

export default class ARComponent extends Component {

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
      <View style={{flex: 1,}}>
        <ARHeaderComponent/>
        <View style={{height: "96%"}}>
          
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
import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, resizeMode, ActivityIndicator,ImageBackground } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <ImageBackground style={images.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
        <View style={[styles.container, styles.horizontal, {backgroundColor: "transparent"}]}>
             <ActivityIndicator size= {60} color="#fff" />
        </View>
      </ImageBackground>
    )
  }
}
const images =StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#eaeaea'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
})
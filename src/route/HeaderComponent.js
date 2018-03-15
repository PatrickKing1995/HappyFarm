import React, { Component } from 'react';
import { View, Text, StatusBar,Picker,StyleSheet,ToastAndroid, Image, TouchableOpacity, BackHandler } from 'react-native';

export  class HomeHeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  } 

  render() {
    return (
        <View style={home.wrap}>
            <View style={home.statusBar}>

            </View>
            <View style={home.container}>
                <TouchableOpacity 
                onPress={this.props.notifi}
                style={home.left}>
                    <Image style={home.iconNoti} source={require("../../icons/bell.png")}/>
                </TouchableOpacity>
                <View style={home.title}>
                    <Text style={home.text_Title}>HOME</Text>
                </View>
                <TouchableOpacity 
                onPress={this.props.logOut}
                style={home.right}>
                    <Image style={home.iconNoti} source={require("../../icons/log-out.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}

export  class ARHeaderComponent extends Component {
    constructor(props){
      super(props);
      this.state={
      }
    } 
  
    render() {
      return (
          <View style={AR.wrap}>
              <View style={AR.statusBar}>
  
              </View>
              <View style={AR.container}>

              </View>
          </View>
      )
    }
  }


  export  class DevicesHeaderComponent extends Component {
    constructor(props){
      super(props);
      this.state={
      }
    } 
  
    render() {
      return (
          <View style={Devices.wrap}>
              <View style={Devices.statusBar}>
  
              </View>
              <View style={Devices.container}>
                  <TouchableOpacity style={Devices.left}
                    onPress={this.props.open}
                  >
                      <Image style={Devices.iconNoti} source={require("../../icons/bell.png")}/>
                  </TouchableOpacity>
                  <View style={Devices.title}>
                      <Text style={Devices.text_Title}>DEVICES</Text>
                  </View>
                  <TouchableOpacity 
                  style={Devices.right}
                  onPress={this.props.add}
                  >
                      <Image style={Devices.iconAdd} source={require("../../icons/add.png")}/>
                  </TouchableOpacity>
              </View>
          </View>
      )
    }
  }


  export  class AddHeaderComponent extends Component {
    constructor(props){
      super(props);
      this.state={
      }
    } 
  
    render() {
      return (
          <View style={add.wrap}>
              <View style={add.statusBar}>
  
              </View>
              <View style={add.container}>
                  <TouchableOpacity style={add.left}
                    onPress={this.props.back}
                  >
                      <Image style={add.iconNoti} source={require("../../icons/left-arrow.png")}/>
                  </TouchableOpacity>
                  <View style={add.title}>
                      <Text style={add.text_Title}>ADD DEVICE</Text>
                  </View>
                  <TouchableOpacity 
                  style={add.right}>
                      <Image style={add.iconInfor} source={require("../../icons/info.png")}/>
                  </TouchableOpacity>
              </View>
          </View>
      )
    }
  }

  export  class NotifiHeaderComponent extends Component {
    constructor(props){
      super(props);
      this.state={
      }
    } 
  
    render() {
      return (
          <View style={notifi.wrap}>
              <View style={notifi.statusBar}>
  
              </View>
              <View style={notifi.container}>
                  <TouchableOpacity style={notifi.left}
                    onPress={this.props.back}
                  >
                      <Image style={notifi.iconNoti} source={require("../../icons/left-arrow.png")}/>
                  </TouchableOpacity>
                  <View style={notifi.title}>
                      <Text style={notifi.text_Title}>NOTIFICATIONS</Text>
                  </View>
                  <TouchableOpacity 
                  style={notifi.right}>
                      <Image style={notifi.iconInfor} source={require("../../icons/info.png")}/>
                  </TouchableOpacity>
              </View>
          </View>
      )
    }
  }

const home = StyleSheet.create({
    wrap:{
        flex:1,
        backgroundColor: 'rgba(22, 22, 22, 0.2)',
    },
    statusBar: {
        height: "35%",
        backgroundColor: "transparent"
    },
    container: {
        flex: 1,
        height:"65%",
        flexDirection: "row",
        
    },
    left: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    },
    iconNoti:{
        height: 25,
        width: 25,
    },
    title: {
        width: "60%",
        fontFamily: "monospace",
        alignItems: 'center',
        justifyContent: "center",
    },
    text_Title: {
        fontSize: 18,
        color: "#FFFFFF",
    },
    right: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    }
});

const Devices = StyleSheet.create({
    wrap:{
        flex:1,
        backgroundColor: 'rgba(22, 22, 22, 0.2)',
    },
    statusBar: {
        height: "35%",
        backgroundColor: "transparent"
    },
    container: {
        flex: 1,
        height:"65%",
        flexDirection: "row",
        
    },
    left: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    },
    iconAdd:{
        height: 23,
        width: 23,
    },
    iconNoti:{
        height: 25,
        width: 25,
    },
    title: {
        width: "60%",
        fontFamily: "monospace",
        alignItems: 'center',
        justifyContent: "center",
    },
    text_Title: {
        fontSize: 18,
        color: "#FFFFFF",
    },
    right: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    }
});

const AR = StyleSheet.create({
    wrap:{
        flex:1,
        backgroundColor: 'rgba(22, 22, 22, 0.2)',
    },
    statusBar: {
        height: "35%",
        backgroundColor: "transparent"
    },
    container: {
        flex: 1,
        height:"65%",
        flexDirection: "row",
        
    },
    left: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    },
    iconNoti:{
        height: 25,
        width: 25,
    },
    title: {
        width: "60%",
        fontFamily: "monospace",
        alignItems: 'center',
        justifyContent: "center",
    },
    text_Title: {
        fontSize: 18,
        color: "#FFFFFF",
    },
    right: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    }
});

const add = StyleSheet.create({
    wrap:{
        flex:1,
        backgroundColor: 'rgba(22, 22, 22, 0.2)',
    },
    statusBar: {
        height: "35%",
        backgroundColor: "transparent"
    },
    container: {
        flex: 1,
        height:"65%",
        flexDirection: "row",
        
    },
    left: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    },
    iconInfor:{
        height: 23,
        width: 23,
    },
    iconNoti:{
        height: 27,
        width: 27,
    },
    title: {
        width: "60%",
        fontFamily: "monospace",
        alignItems: 'center',
        justifyContent: "center",
    },
    text_Title: {
        fontSize: 18,
        color: "#FFFFFF",
    },
    right: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    }
});

const notifi = StyleSheet.create({
    wrap:{
        flex:1,
        backgroundColor: 'rgba(22, 22, 22, 0.2)',
    },
    statusBar: {
        height: "35%",
        backgroundColor: "transparent"
    },
    container: {
        flex: 1,
        height:"65%",
        flexDirection: "row",
        
    },
    left: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    },
    iconInfor:{
        height: 23,
        width: 23,
    },
    iconNoti:{
        height: 27,
        width: 27,
    },
    title: {
        width: "60%",
        fontFamily: "monospace",
        alignItems: 'center',
        justifyContent: "center",
    },
    text_Title: {
        fontSize: 18,
        color: "#FFFFFF",
    },
    right: {
        width: "20%",
        alignItems: 'center',
        justifyContent: "center",
    }
});

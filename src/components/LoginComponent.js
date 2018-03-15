import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  Alert,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from "react-native";

import Loading from "./LoadingComponent";

const ACCESS_TOKEN = "access_token";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: true
    };
  }

  componentWillMount() {
    this.verifyToken();
  }

  async verifyToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if (accessToken) {
        this.props.navigation.navigate("Screen_Home");
      } else {
      }
      this.setState({ loading: false });
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  getToken = (responseJson) => {
    let accessToken = responseJson.token;
    AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
    this.props.navigation.navigate("Screen_Home");
  };

  LoginPer() {
    fetch('http://116.98.208.44:3000/api/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response)=>response.json())
    .then((responseJson) => {
      if(responseJson.token.toString() != null){
        this.getToken(responseJson);
      } else {
        Alert.alert(
          "LOGIN",
          "Fail",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    })
      .catch(function (error) {
        Alert.alert(
          "LOGIN",
          "Fail",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (  
        <View style={{flex: 1}}>
          <StatusBar translucent={true} backgroundColor="transparent"/>
          <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={3}>
          <View behavior="padding" style={styles.wrapper}>
            <View style={styles.container}>
              <Image
                style={styles.imagelogin}
                source={require("../../icons/logo4.png")}
              />
              <TouchableOpacity
                onPress={Keyboard.dismiss}
                accessible={false}
                style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20, marginTop: 15}}
              >
                <Image 
                  style={{width: 20, height:20, paddingRight: 30, tintColor: "#fff", resizeMode: "contain"}}
                  source={require("../../icons/profile.png")}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Username"
                  keyboardType="default"
                  autoCapitalize="none"
                  placeholderTextColor="#fff"
                  onChangeText={username => {
                    this.setState({ username });
                  }}
                  underlineColorAndroid="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity
               onPress={Keyboard.dismiss}
               accessible={false}
               style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 25}}
              >
                <Image 
                  style={{width: 20, height:20, paddingRight: 30, tintColor: "#fff", resizeMode: "contain"}}
                  source={require("../../icons/key.png")}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  keyboardType="default"
                  autoCapitalize="none"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  onChangeText={password => {
                    this.setState({ password });
                  }}
                  underlineColorAndroid="#fff"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.LoginPer();
                }}
                style={styles.buttonLogin}
              >
                <Image 
                  style={{width: 30, height:30, tintColor: "#eaeaea", resizeMode: "contain"}}
                  source={require("../../icons/log-in.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    padding: 5,
    width: 250,
    color: "#fff",
    fontFamily: "Relish Pro",
    backgroundColor: "transparent"
  },
  buttonLogin: {
    width: 100,
    height: 45,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  buttonSignup: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "transparent"
  },
  textLogin: {
    color: "#F5F5F5",
    fontSize: 20,
    fontFamily: "Relish Pro Medium"
  },
  imagelogin: {
    width: 300,
    height: 100,
    opacity: 0.8,
    resizeMode: 'contain',
    marginBottom: 60,
    backgroundColor: "transparent"
  },
  textRegister: {
    fontSize: 17,
    fontFamily: "Relish Pro Medium",
    color: "#eaeaea"
  },
  textRegular: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    fontFamily: "Relish Pro"
  }
});
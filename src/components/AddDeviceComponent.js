import React, { Component } from 'react'
import { Text,TextInput,Image, View,BackHandler, TouchableOpacity,Alert,AsyncStorage,StatusBar,ImageBackground,StyleSheet } from 'react-native'
import {AddHeaderComponent} from '../route/HeaderComponent'

export default class AddDeviceComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      searchable: false
    }
  }

  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
      <View style={{flex: 1,}}>
        <AddHeaderComponent back={() => this.goBack()}/>
        <View style={{height: "89%"}}>
            <View style={styles.search}>
              <TextInput
                        style={{flex:1}}
                        placeholder="Enter Device's ID"
                        editable={this.state.searchable?false:true}
                        placeholderTextColor={'#dcdcdc'}
                        onChangeText={(searchText) => this.setState({searchText})}
                        underlineColorAndroid="transparent"
                        value={this.state.searchText}
                    />
              <TouchableOpacity
                  onPress={()=>{this.state.searchable?this.setState({searchText: ''}):null,this.setState({searchable: !this.state.searchable})}}
                >
                <Image source={this.state.searchable?require('../../icons/close-button.png'):require('../../icons/download.png')} style={styles.ImageStyle} />
              </TouchableOpacity>
              </View>
              <View style={styles.list}>

              </View>
              <View style={styles.tab}>

              </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    // resizeMode: 'cover'
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '8%',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(22, 22, 22, 0.2)',
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 5,
    marginVertical: 8,
  },

  list: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    height: "79%",
  },
  tab: {
    height: "13%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 25,
    marginHorizontal: 5,
    marginVertical: 8,
  },
  ImageStyle: {
    padding: 10,
    marginLeft: 10,
    marginRight: 5,
    height: 22,
    tintColor: '#fff',
    width: 22,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
})

const search = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
    height: "11%",
    alignItems: 'center',
    backgroundColor: '#E4E4E4'
  },
  searchBar: {
    paddingLeft: 20,
    fontSize: 16,
    width: "100%",
    height: '100%',
    backgroundColor: '#fff'
  },
})
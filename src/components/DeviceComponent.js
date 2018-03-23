import React, { Component } from 'react'
import { Text, View,BackHandler,Switch, TouchableOpacity,FlatList,Alert,AsyncStorage,StatusBar,ImageBackground,StyleSheet, Image, TextInput } from 'react-native'
import {DevicesHeaderComponent} from '../route/HeaderComponent'
import listOfDevices from '../model/devices'


const Item = (item, index)=>(
  <View style={[list.container, {backgroundColor: index%2 == 0 ?"rgba(22, 22, 22, 0.2)":"transparent"}]}>
      <View style={list.avatar}>
        <Image
            style={list.imageDevice}
            source={require("../../icons/location-pin.png")}
          />
      </View>
      <View style={list.detail}>
        <View style={list.title}>
          <View style={list.name}>
            <Text style={list.nameDevice}>{item.name}</Text>
          </View>
          <View style={list.activity}>
            <Switch
              onTintColor= "rgba(255, 255, 255, 0.6)"
              thumbTintColor= "#fff"
              value = {item.status=='0'?false:true}
            />
          </View>
        </View>
        <View style={list.data}>
          <View style={list.temp}>
            <View style={{width: '50%'}}>
              <Image
                  style={list.iconTem}
                  source={require("../../icons/celsius.png")}
              />
            </View>
            <View style={{width: '50%'}}>
              <Text style={list.textData}>{item.temp}</Text>
            </View>
          </View>
          <View style={list.humi}>
            <View style={{width: '50%'}}>
                <Image
                    style={list.iconHumi}
                    source={require("../../icons/humidity.png")}
                />
              </View>
              <View style={{width: '50%'}}>
                <Text style={list.textData}>{item.humi}</Text>
              </View>
          </View>
        </View>
        <View style={list.date}>
            <View style={{width: '30%'}}>
                <Image
                    style={list.iconDate}
                    source={require("../../icons/calendar.png")}
                />
              </View>
              <View style={{width: '70%'}}>
                <Text style={list.textData}>{item.manufacturing_date}</Text>
              </View>
        </View>
      </View>
    </View>
)



export default class DeviceComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      searchable: false
    }
  }

  openAddDevice = () => {
    this.props.navigation.navigate('Screen_AddDevice');
  };

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
      <View style={{flex: 1,}}>
        <DevicesHeaderComponent add={() => this.openAddDevice()}/>
        <View style={{height: "89%"}}>
          <View style={styles.search}>
          <TouchableOpacity
              onPress={()=>{this.state.searchable?this.setState({searchText: ''}):null,this.setState({searchable: !this.state.searchable})}}
            >
            <Image source={this.state.searchable?require('../../icons/close-button.png'):require('../../icons/loupe.png')} style={styles.ImageStyle} />
          </TouchableOpacity>
    
              <TextInput
                  style={{flex:1}}
                  placeholder="Enter Device's ID"
                  editable={this.state.searchable?false:true}
                  placeholderTextColor={'#dcdcdc'}
                  onChangeText={(searchText) => this.setState({searchText})}
                  underlineColorAndroid="transparent"
                  value={this.state.searchText}
              />
          </View>
          <View style={styles.list}>
              <FlatList
              data={listOfDevices}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => Item(item, index)}
              />
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
    backgroundColor: 'rgba(22, 22, 22, 0.2)',
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 5,
    marginVertical: 8,
  },

  list: {
    paddingHorizontal: 5,
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

const list = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 2,
    height: 95,
  },
  detail: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDevice:{
    width: 50,
    resizeMode: 'contain'
  },
  title:{
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  data:{
    height: '35%',
    flexDirection: 'row',
  },
  date:{
    height: '35%',
    flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name:{
    width: '80%',
  },
  activity:{
    width: '20%',
  },
  temp:{
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  humi:{
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameDevice:{
    fontSize: 17,
    color: '#fff',
  },
  textData: {
    fontSize: 15,
    color: '#fff'
  },
  iconTem: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  iconHumi:{
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  iconDate:{
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
})
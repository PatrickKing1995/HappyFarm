import React, { Component } from 'react'
import { Text, View,BackHandler, TouchableOpacity,Alert,AsyncStorage,StatusBar,ImageBackground,StyleSheet,Dimensions } from 'react-native'
import {HomeHeaderComponent} from '../route/HeaderComponent'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {SmoothLine} from 'react-native-pathjs-charts';
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
const {
  height
} = Dimensions.get('window')

const ACCESS_TOKEN = "access_token";

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul.','Aug','Sep','Oct','Nov','Dec'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.defaultLocale = 'fr';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [{
          "x": 0,
          "y": 0
        }, {
          "x": 1,
          "y": 60
        }, {
          "x": 2,
          "y": 50
        }, {
          "x": 3,
          "y": 64
        }, {
          "x": 4,
          "y": 63
        }, {
          "x": 5,
          "y": 74
        }, {
          "x": 6,
          "y": 35
        }, {
          "x": 7,
          "y": 46
        }, {
          "x": 8,
          "y": 13
        }, {
          "x": 9,
          "y": 17
        }, {
          "x": 10,
          "y": 38
        }, {
          "x": 11,
          "y": 39
        }, {
          "x": 12,
          "y": 43
        }, {
          "x": 13,
          "y": 43
        }, {
          "x": 14,
          "y": 52
        }, {
          "x": 15,
          "y": 55
        }, {
          "x": 16,
          "y": 86
        }, {
          "x": 17,
          "y": 82
        }, {
          "x": 18,
          "y": 85
        }, {
          "x": 19,
          "y": 100
        }, {
          "x": 20,
          "y": 36
        }, {
          "x": 21,
          "y": 34
        }, {
          "x": 22,
          "y": 23
        }, {
          "x": 23,
          "y": 56
        }],
        [{
          "x": 0,
          "y": 20
        }, {
          "x": 1,
          "y": 22
        }, {
          "x": 2,
          "y": 23
        }, {
          "x": 3,
          "y": 10
        }, {
          "x": 4,
          "y": 23
        }, {
          "x": 5,
          "y": 17
        }, {
          "x": 6,
          "y": 14
        }, {
          "x": 7,
          "y": 15
        }, {
          "x": 8,
          "y": 16
        }, {
          "x": 9,
          "y": 17
        }, {
          "x": 10,
          "y": 27
        }, {
          "x": 11,
          "y": 23
        }, {
          "x": 12,
          "y": 22
        }, {
          "x": 13,
          "y": 26
        }, {
          "x": 14,
          "y": 23
        }, {
          "x": 15,
          "y": 27
        }, {
          "x": 16,
          "y": 26
        }, {
          "x": 17,
          "y": 23
        }, {
          "x": 18,
          "y": 29
        }, {
          "x": 19,
          "y": 30
        }, {
          "x": 20,
          "y": 31
        }, {
          "x": 21,
          "y": 34
        }, {
          "x": 22,
          "y": 23
        }, {
          "x": 23,
          "y": 21
        }]
      ]
    };
    this.onDayPress = this.onDayPress.bind(this);
    console.ignoredYellowBox = [""];
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPress);
  }

  onBackButtonPress (){
    return true;
  };

  onLogout(){
    this.deleteToken();
  }

  confirmDelete() {
    Alert.alert("Are you sure?", "Do you want to Logout?", [
      {text: 'Cancel'}, {text: 'Logout', onPress: () => this.onLogout()}
    ]);
}

  async deleteToken() {
        await AsyncStorage.setItem(ACCESS_TOKEN, '')
        this.props.navigation.navigate('Screen_Login')
}

onDayPress(day) {
  this.setState({
    selected: day.dateString
  });
}

  openNotifi = () => {
    this.props.navigation.navigate('Screen_Notifi');
  };

  render() {
    let options = {
      width: 320,
      height: 180,
      color: '#E6E6E6',
      margin: {
        top: 20,
        left: 25,
        bottom: 25,
        right: 20
      },
      animate: {
        type: 'delayed',
        duration: 100,
        fillTransition:1
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: false,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: false,
          fill: '#ffffff'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: false,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 12,
          fontWeight: false,
          fill: '#ffffff'
        }
      }
    }
    return (
      <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
      <View style={{flex: 1,}}>
        <HomeHeaderComponent logOut={() => this.confirmDelete()} notifi={()=>this.openNotifi()} style={{height: "11%"}}/>
        <View style={{height: "89%"}}>
          <View style={styles.content}>
            <View style={styles.chart}>
              <SmoothLine data={this.state.data} options={options} xKey='x' yKey='y' />
            </View>
            <View style={styles.calendar}>
            {/* <CalendarList  
              pastScrollRange={24}
              futureScrollRange={24}
              style={styles.calendars}
              minDate={'2016-05-10'}
              markingType={'basic'}
              hideExtraDays={true}
              firstDay={1}
              onDayPress={this.onDayPress}
              markedDates={{[this.state.selected]: {selected: true}}}
              theme={{
                calendarBackground: 'rgba(22, 22, 22, 0.2)',
                textSectionTitleColor: 'white',
                dayTextColor: 'rgba(246,247,235, 0.6)',
                todayTextColor: '#fff',
                //selectedDayTextColor: '#FFC857',
                selectedDayBackgroundColor: 'rgba(255, 255, 255, 0.8)',
                monthTextColor: 'white',
                arrowColor: 'white',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontSize: 12,
                textMonthFontSize: 12,
                textDayHeaderFontSize: 12,
                'stylesheet.day.basic': {
                  base: {
                    paddingHorizontal: 5,
                    width: 32,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: "center",
                  },
                  todayText:{
                    color: "#fff",
                    fontSize: 16  ,
                    fontWeight: "700",
                  },
                  text: {
                    fontSize: 12,
                    fontFamily: 'monospace',
                    fontWeight: '300',
                    color: 'rgba(246,247,235, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0)'
                  },
                  selectedText:{
                    color: "#fff",
                  },
                  selected: {
                    backgroundColor: "transparent",
                    borderColor: "#fff",
                    borderWidth: 1,
                    borderRadius: 16,
                  },
                },
              }}
            /> */}
            <Calendar
              style={styles.calendars}
              minDate={'2012-05-10'}
              markingType={'basic'}
              hideExtraDays={true}
              firstDay={2}
              onDayPress={this.onDayPress}
              markedDates={{[this.state.selected]: {selected: true}}}
              theme={{
                calendarBackground: 'rgba(22, 22, 22, 0.2)',
                textSectionTitleColor: 'white',
                dayTextColor: 'rgba(246,247,235, 0.6)',
                selectedDayBackgroundColor: 'rgba(255, 255, 255, 0.8)',
                monthTextColor: 'white',
                arrowColor: 'white',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontSize: 12,
                textMonthFontSize: 12,
                textDayHeaderFontSize: 12,
                'stylesheet.day.basic': {
                  base: {
                    width: 32,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: "center",
                  },
                  todayText:{
                    color: "#fff",
                    fontSize: 16  ,
                    alignContent: 'center',
                    fontWeight: "700",
                  },
                  text: {
                    fontSize: 12,
                    fontFamily: 'monospace',
                    fontWeight: '300',
                    color: 'rgba(246,247,235, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0)'
                  },
                  selectedText:{
                    color: "#fff",
                  },
                  selected: {
                    backgroundColor: "transparent",
                    borderColor: "#fff",
                    borderWidth: 1,
                    borderRadius: 16,
                  },
                },
                'stylesheet.calendar.main':{
                  week: {
                    marginTop: 6,
                    marginBottom: 6,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                  },
                }
            }}/>
            </View>
          </View>
          <View style={styles.tab}>

          </View>
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
  chart:{
    height: "45%",  
  },
  calendars: {
    paddingTop: 5,
    height: "100%"
},
  calendar:{
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    height: "55%"
  },
  tab:{
    height: "9%",
  },
  content:{
    height: "91%",
  },
})
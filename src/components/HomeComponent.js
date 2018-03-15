import React, { Component } from 'react'
import { Text, View,BackHandler, TouchableOpacity,Alert,AsyncStorage,StatusBar,ImageBackground,StyleSheet,Dimensions } from 'react-native'
import {HomeHeaderComponent} from '../route/HeaderComponent'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
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
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
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
    return (
      <ImageBackground style={styles.backgroundImage} source={require("../../images/wall4.jpg")} blurRadius={2}>
      <View style={{flex: 1,}}>
        <HomeHeaderComponent logOut={() => this.confirmDelete()} notifi={()=>this.openNotifi()} style={{height: "11%"}}/>
        <View style={{height: "89%"}}>
          <View style={styles.content}>
            <View style={styles.chart}>

            </View>
            <View style={styles.calendar}>
            <CalendarList  
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
                    color: "#000",
                  }
                },
              }}
            />
            {/* <Calendar
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
                // todayTextColor: '#DB3A34',
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
                    width: 20,
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
                    color: "#000",
                  }
                },
                'stylesheet.calendar.main':{
                  week: {
                    marginTop: 6,
                    marginBottom: 6,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                  },
                }
            }}/> */}
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
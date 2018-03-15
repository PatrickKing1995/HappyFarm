import React, {
    Component
} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import {
    TabNavigator, StackNavigator
} from 'react-navigation';
import AddDeviceComponent from '../components/AddDeviceComponent';
import HomeComponent from '../components/HomeComponent';
import ARComponent from '../components/ARComponent';
import DeviceComponent from '../components/DeviceComponent';
import NotificationComponent from '../components/NotificationComponent';
const {
    height
} = Dimensions.get('window')

export const Device_AddNavigation = StackNavigator({
    Screen_Device: {
        screen: DeviceComponent,
        navigationOptions: {
            header: null,
        }
    },
    Screen_AddDevice: {
        screen: AddDeviceComponent,
        navigationOptions: {
            header: null,
        }
    }
})


export const Home_NotifiNavigation = StackNavigator({
    Screen_Home: {
        screen: HomeComponent,
        navigationOptions: {
            header: null,
        }
    },
    Screen_Notifi: {
        screen: NotificationComponent,
        navigationOptions: {
            header: null,
        }
    }
})


export const TabComponent = TabNavigator({
    Screen_Home: {
        screen: Home_NotifiNavigation,
        navigationOptions: {
            tabBarLabel: () => <Text style = {tab.text}>Home</Text>,
            tabBarIcon: () =>
            <View>
                <Image source = {require('../../icons/home.png')} style = {tab.icon}/>
                {/* <Count/> */}
            </View>
        }
    },
    Screen_AR: {
        screen: ARComponent,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {tab.text}>Location</Text>,
            tabBarIcon: () =>
                <View>
                    <Image source = {require('../../icons/map-marker-radius.png')} style = {tab.icon}/> 
                </View>

        }
    },

    Screen_Devices: {
        screen: Device_AddNavigation,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {tab.text} >Devices</Text>,
            tabBarIcon: (TintColor) =>
                <Image
            source = {
                require('../../icons/speaker-wireless.png')
            }
            style = {
                tab.icon
            }
            />
        }
    },
}, {

    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        style: {
            backgroundColor: 'transparent',            
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0
          },
        tabStyle: {
            height: height * 0.075,
            backgroundColor: 'rgba(22, 22, 22, 0.2)',
        },
        iconStyle: {
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: 55,
            height: 23,
        },
        upperCaseLabel: false,
        renderIndicator: () => null,
        showLabel: true,
        showIcon: true
    },
})

const tab = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#fff',
    },
    icon: {
        height: 22,
        width: 22,
        tintColor: "#fff"
    },
    favor: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        top: 0,
    },
    textI: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 13,
    }
})
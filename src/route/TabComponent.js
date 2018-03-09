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
    TabNavigator,
} from 'react-navigation';
import Count from '../route/Count'
const {
    height
} = Dimensions.get('window')

export const TabComponent = TabNavigator({
    Screen_: {
        screen: Details,
        navigationOptions: {
            tabBarLabel: () => <Text style = {tab.text}>Movies</Text>,
            tabBarIcon: () =><Image source = {require('../../icons/home.png')} style = {tab.icon}/>

        }
    },
    Screen_Favor: {
        screen: DetailsFavor,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {tab.text}>Favoristes</Text>,
            tabBarIcon: () =>
                <View>
                    <Image source = {require('../../icons/favor.png')} style = {tab.icon}/> 
                    <Count/>
                </View>

        }
    },

    Screen_Setting: {
        screen: Reminders,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {
                    tab.text
                } > Settings </Text>,
            tabBarIcon: () =>
                <Image
            source = {
                require('../../icons/settings.png')
            }
            style = {
                tab.icon
            }
            />
        }
    },

    Screen_About: {
        screen: AboutComponent,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {
                    tab.text
                } > About </Text>,
            tabBarIcon: () =>
                <Image
            source = {
                require('../../icons/about.png')
            }
            style = {
                [tab.icon]
            }
            />
        }
    },
}, {

    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
        // activeTintColor: '#2c3e50',
        style: {
            backgroundColor: '#1F2B40',
            opacity: 1,
        },
        tabStyle: {
            height: height * 0.09,
        },
        iconStyle: {
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: 60,
            height: 32,
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
        color: '#F6F7F8',
    },
    icon: {
        top: 5,
        height: 25,
        width: 25,
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
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {StackNavigator} from 'react-navigation'
import DeviceComponent from '../components/DeviceComponent'
import AddDeviceComponent from '../components/AddDeviceComponent'
import LoginComponent from '../components/LoginComponent'
import HomeComponent from '../components/HomeComponent'
import {TabComponent} from './TabComponent'

export const Login_HomeNavigation = StackNavigator({
    Screen_Login: {
        screen: LoginComponent,
        navigationOptions: {
            header: null,
            // gesturesEnabled: false,
        }
    },
    Screen_Home: {
        screen: TabComponent,
        navigationOptions: {
            header: null,
        }
    }
})
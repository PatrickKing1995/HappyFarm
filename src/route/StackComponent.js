import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {StackNavigator} from 'react-navigation'

export const Reminders = StackNavigator({
    Screen_Set: {
        screen: SettingComponent,
        navigationOptions: {
            header: null,
        }
    },
    Screen_All: {
        screen: AllReminderContainer,
        navigationOptions: {
            header: null,
        }
    }
})
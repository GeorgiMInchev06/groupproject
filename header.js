import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import {Entypo} from '@expo/vector-icons'


export default function Header() {
  return (
    <View style = {{
        marginTop:ConstantSourceNode.StatusBarHeight,
        width: '99vw',
        height: '40px',
        backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between'
        }}>
        <Entypo name = "home" size={35} color = "white"/> 
        <Entypo name = "magnifying-glass" size={35} color = "white"/> 
    </View>
  );
}

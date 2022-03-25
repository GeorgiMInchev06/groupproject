import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import EventList from './EventList';
import Home from './Home';
import DisplayAnImage from './images';


export default function App() {
  return (
    <View style = {styles.image}>
      <View style = {styles.container}>
        <Home/>
        <EventList/>
        <StatusBar style= "auto"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDC3A5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});


import React, {Component} from 'react';
import reactDom from 'react-dom';
import {Text, View, StyleSheet, Image} from 'react-native';



export default function EventCard({eventItem}) {
 return (
 <View style={styles.container}>
    <View style={styles.cardHeader}>
        <Text style={styles.title}>{eventItem.title}</Text>
        <Text style={styles.squareMeters}>{eventItem.squareMeters}</Text>
        <Text style={styles.price}>{eventItem.price}</Text>
    </View>
 </View>
 );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 67,
        justifyContent: "space-between",
        backgroundColor: '#E0A96D',
        flex: 1,
        padding: 70,
        paddingBottom: 80,
        justifyContent: 'center',
        borderRadius:50
    },

    title: {
        fontFamily: "Inconsolata",
        fontSize: 30,
        fontWeight: "bold"
    },
    squareMeters: {
        fontFamily: "Inconsolata",
        fontSize: 25
    },
    price: {
        fontFamily: "Inconsolata",
        fontSize: 25
    },

    cardHeader:{
        flex: 1,
        flexDirection: 'left'
    }
});
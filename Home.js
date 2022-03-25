import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Header from './header';
import DisplayAnImage from './images';


export default function HomeScreen() {
    return(
        <View style = {styles.image}>
            <View>  
             <Header/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        alignContent: 'center',
        justifyContent: 'center'
    }
})

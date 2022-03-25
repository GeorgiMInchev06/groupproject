import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';


class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('./images/Boqna.jpg')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./images/Trakiq.jpg')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./images/Izgrew.jpg')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./images/stara zagora.jpg')}
        />
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    container: {
      marginRight: 100,
    },
    tinyLogo: {
      width: '35vw',
      height: '40vh',
      marginBottom: 25,
      resizeMode: 'cover'
    },
  });
export default DisplayAnImage;
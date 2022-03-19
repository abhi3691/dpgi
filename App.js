import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

// const {width, height} = Dimensions.get(window);
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('./assets/logo.png')}
            resizeMode="cover"
          />
          <Text></Text>
        </View>
      </View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF1FC',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#161717',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoImage: {
    width: 60,
    height: 60,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import databse from '@react-native-firebase/storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Register() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  return (
    <ScrollView
      style={styles.container}
      pagingEnabled
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <Header />
        <View>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/logo.png')}
                resizeMode="cover"
              />
              <Text style={styles.logoText}>DPGI</Text>
            </View>
            <View style={styles.cmpNameContainer}>
              <Text style={styles.cmpNameText}>
                DOCTOR'S PLANT GLOBAL INSTITUTE
              </Text>
            </View>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="User Name"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput style={styles.inputText} placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput style={styles.inputText} placeholder="Mobile Number"
              value={mobileNumber}
              onChangeText={text => setMobileNumber(text)} />
            <TextInput style={styles.inputText} placeholder="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              style={styles.inputText}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              placeholder="Re-Enter password"
            />
          </View>
          <TouchableOpacity style={styles.resetProfile}>
            <Text style={styles.resetProfileText}>Reset Profile</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: windowHeight,
    // width: windowWidth,
    backgroundColor: '#EAF1FC',
  },
  header: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#274073',
    paddingLeft: 10,
  },
  cmpNameContainer: {
    backgroundColor: '#55027C',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  cmpNameText: {
    color: '#fff',
  },
  formContainer: {
    alignItems: 'center',
    height: windowHeight / 3,
    marginVertical: 20,
    marginTop: 40,
  },
  inputText: {
    height: 50,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 10,
  },
  resetProfile: {
    backgroundColor: 'rgb(246, 132, 0)',
    height: 50,
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  resetProfileText: {
    color: '#fff',
    fontSize: 20,
  },
});

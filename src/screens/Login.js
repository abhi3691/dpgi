import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  ToastAndroid,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function LoginScreen({ navigation }) {
  const [PhonePage, setPhonePage] = useState(true);
  const [emailPage, setEmailPage] = useState(false);
  const [emailId, setEmailId] = useState(null)
  const [password, setPassword] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [conform, setConfirm] = useState(null);
  const [result, setResult] = useState(null);


  // ------------------------- PHONE LOGIN ----------------------------
  const GetOtp = async () => {
    console.log(phoneNumber)
    auth()
      .signInWithPhoneNumber("+91" + phoneNumber)
      .then(res => {
        console.log('response', res);
        if (res) {
          setConfirm(res)
          navigation.navigate('Otp', { confirm: res })
          ToastAndroid.showWithGravityAndOffset(
            'OTP Generated',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        }
      })
      .catch(error => {
        console.log('error', error);
        ToastAndroid.showWithGravityAndOffset(
          'Invalid phone Number',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        setConfirm(null)
      });

  };

  // ------------------------- EMAIL LOGIN ----------------------------

  const SignIn = () => {
    if (emailId && password != null) {
      auth()
        .signInWithEmailAndPassword(emailId, password)
        .then(res => {
          console.log('response', res);
          setResult(res);
          navigation.navigate('Tabs', result);
        })
        .catch(error => {
          console.log('error', error);
          Alert.alert(error.message);
        });
    } else {
      console.log('error', error);
      ToastAndroid.showWithGravityAndOffset(
        'Email and Password Empty',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to</Text>
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
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={styles.pageContainer}>
          <Pressable
            style={[styles.mobilePageContainer, { opacity: PhonePage ? 0.8 : 1 }]}
            onPress={() => {
              setPhonePage(true);
              setEmailPage(false);
              //   console.log(PhonePage);
            }}
            disabled={PhonePage}>
            <Text style={{ color: '#fff' }}>Mobile</Text>
          </Pressable>
          <Pressable
            style={[styles.emailPageContainer, { opacity: emailPage ? 0.8 : 1 }]}
            onPress={() => {
              setPhonePage(false);
              setEmailPage(true);
            }}
            disabled={emailPage}>
            <Text style={{ color: '#fff' }}>Email</Text>
          </Pressable>
        </View>
        {emailPage ? (
          <View style={styles.Page}>
            <View style={styles.inputContainer2}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter your Email ID"
                value={emailId}
                onChangeText={(text) => setEmailId(text)}
                keyboardType="email-address"></TextInput>
            </View>
            <View style={styles.inputContainer2}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Your Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}></TextInput>
            </View>
            <TouchableOpacity style={styles.OtpButton}
              onPress={() => SignIn()}
            >
              <Text style={styles.OtpButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.Page}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputStyle}
                autoFocus
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter your Phone number"
                keyboardType="phone-pad"></TextInput>
            </View>
            <TouchableOpacity style={styles.OtpButton} onPress={() => GetOtp()}>
              <Text style={styles.OtpButtonText}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.bottom}>
        <Text style={{ fontSize: 20 }}>New to DGI ?</Text>
        <TouchableOpacity
          style={styles.signUpContainer}
          onPress={() => navigation.navigate('register')}>
          <Text style={styles.signUpText}>Signup !</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#EAF1FC',
  },
  header: {
    height: windowHeight / 3.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: '#161717',
    marginTop: 40,
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
  mobilePageContainer: {
    height: 55,
    width: 150,
    backgroundColor: '#274073',
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailPageContainer: {
    height: 55,
    width: 150,
    backgroundColor: '#274073',
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  Page: {
    height: 180,
    width: 300,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  inputContainer: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    width: '85%',
    marginVertical: 20,
  },
  inputContainer2: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    width: '85%',
    marginVertical: 5,
  },
  inputStyle: {
    alignSelf: 'center',
  },
  OtpButton: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#274073',
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  OtpButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  bottom: {
    height: 225,
    alignItems: 'center',
  },
  signUpContainer: {
    backgroundColor: 'rgb(246, 132, 0)',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 20,
  },
});

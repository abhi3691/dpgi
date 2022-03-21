import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ToastAndroid
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import auth from '@react-native-firebase/auth'
export default function VerifyScreen(props) {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const sixthInput = useRef();
    const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
    const navigation = useNavigation()
    const confirm = props.route.params.confirm
    const verifyOtp = async () => {
        var text;
        var value;
        var finaleOtp = '';
        for (let key in otp) {
            text = key
            value = otp[key];
            if (value != undefined) {
                finaleOtp = finaleOtp + value
            }

        }
        console.log('otp is ', finaleOtp)



        try {
            let data = await confirm.confirm(finaleOtp)
            console.log('data is-------------------', data)


        }
        catch ({ error }) {
            ToastAndroid.showWithGravityAndOffset(
                error,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
        auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('Tabs')
            }
        })
    }
    return (
        <View style={styles.container}>
            <Header />
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
            <View style={styles.body}>
                <Text style={styles.OtpTitle}>Enter the OTP</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={firstInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 1: text });
                            text && secondInput.current.focus();

                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={secondInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 2: text });
                            text ? thirdInput.current.focus() : firstInput.current.focus();
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={thirdInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 3: text });
                            text ? fourthInput.current.focus() : secondInput.current.focus();
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={fourthInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 4: text });
                            text ? fifthInput.current.focus() : thirdInput.current.focus();
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={fifthInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 5: text });
                            text ? sixthInput.current.focus() : fourthInput.current.focus();
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={sixthInput}
                        onChangeText={text => {
                            setOtp({ ...otp, 6: text });
                            !text && fifthInput.current.focus();
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.submitButton}
                    onPress={() => verifyOtp()}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    body: {
        alignItems: 'center',
        marginVertical: 80,
    },
    OtpTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    inputBox: {
        height: 50,
        width: 50,
        borderRadius: 6,
        borderColor: '#274073',
        borderWidth: 2,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
    submitButton: {
        height: 50,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'rgb(246, 132, 0)',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 20,
    },
});

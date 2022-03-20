import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Logo() {
    return (
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
    )
}

const styles = StyleSheet.create({
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
})
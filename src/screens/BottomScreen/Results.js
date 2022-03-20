import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
export default function Results() {
    return (
        <View style={styles.container}>
            <Header />
            <Logo />
            <Text style={{ alignSelf: 'center', fontSize: 30, marginTop: 20 }}>Results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAF1FC'
    }
})
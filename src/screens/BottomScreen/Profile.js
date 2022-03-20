import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
export default function Profile() {
    return (
        <View style={styles.container}>
            <Header />
            <Logo />
            <Text style={{ alignSelf: 'center', fontSize: 30, marginTop: 20 }}>Profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAF1FC'
    }
});
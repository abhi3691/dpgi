import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
export default function Header() {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome name='angle-left' size={35} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.drownerButton}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 20,

    },
    backButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        elevation: 10,
        backgroundColor: '#EEF3FC',
        alignItems: 'center',
        justifyContent: 'center'

    },
    drownerButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        elevation: 10,
        backgroundColor: '#EEF3FC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        height: 10,
        width: 10,
        backgroundColor: '#697796',
        borderRadius: 1,
        margin: 2,
    }

})
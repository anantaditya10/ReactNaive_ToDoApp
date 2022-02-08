import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NetInfo from '@react-native-community/netinfo';


export default function Error({ errorText, onReload, reloadBtnText }) {

    return (
        <View style={styles.container}>
            <Text>{errorText}</Text>
            <TouchableOpacity style={styles.btnlgn} onPress={() => onReload()}>
                <Text style={styles.btntxt}> {reloadBtnText} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center'
    },
    btnlgn: {
        backgroundColor: "#FFD700",
        marginTop: 20,
        padding: 15,
        width: '30%'
    },
    btntxt: {
        fontSize: 18,
        textAlign: "center"
    }
});

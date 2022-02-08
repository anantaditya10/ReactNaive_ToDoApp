import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { color } from "react-native-reanimated";

const Login = ({ headerText, onSubmit, submitButtonText }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Text h3 >{headerText}</Text>
            <Spacer />
            <Input label="Email"
                value={username}
                onChangeText={setUsername}
                autoCapitalize='none'
                autoCorrect={false} />
            <Spacer />
            <Input label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry />
            <TouchableOpacity onPress={() => onSubmit(username, password)}>
                <View style={styles.button} >
                    <Text style={styles.btnTxt}>{submitButtonText}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errrorText: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15

    },
    button: {
        backgroundColor: '#00b294',
        height: 40,
        width: 100,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

});

export default Login;
import React from 'react';
import { Alert, AsyncStorage } from 'react-native';
import Login from '../components/Login';
const LoginScreen = ({ navigation }) => {
    const signin = (username, password) => {
        if ((username === "user1" && password === 'password1') ||
            (username === "user2" && password === 'password2')) {
            storeData(username, password);
            navigation.navigate('Home');
        }
        else {
            Alert.alert('Please fill correct Username and Password !!');
            return;
        }
    }
    async function storeData(username, password) {
        try {
            await AsyncStorage.setItem('UserName', username);
            await AsyncStorage.setItem('Password', password);
        } catch (error) {
        }
    };


    return (
        <Login headerText='Sign In'
            onSubmit={signin}
            submitButtonText='Login'
        />
    );

}
export default LoginScreen;
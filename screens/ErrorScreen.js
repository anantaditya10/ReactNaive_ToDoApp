import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Error from '../components/Error';


const ErrorScreen = ({ navigation }) => {

    const reloadHandler = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                navigation.navigate('Home');
            }
        });
    }

    return (
        <View style={styles.container}>
            <Error errorText='Errors while Loading. Please reload.'
                onReload={reloadHandler}
                reloadBtnText='Reload' />
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
    }
});
export default ErrorScreen;
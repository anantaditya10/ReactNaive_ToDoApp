import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, AsyncStorage, FlatList } from 'react-native';
import Header from '../components/Header';
import ToDoItem from '../components/ToDoItem';
import NetInfo from '@react-native-community/netinfo';
const HomeScreen = ({ navigation }) => {

    const [todos, setTodos] = useState();
    const [showLoader, setLoader] = useState(true);
    useEffect(() => {
        NetInfo.fetch().then(state => {
            if (!state.isConnected) {
                navigation.navigate('Error');
            }
            else {
                getTodos();
            }
        });
    }, []);


    async function getTodos() {
        const username = await AsyncStorage.getItem('UserName')
        const userId = username === 'user1' ? 1 : 2
        let resp = await fetch(`http://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        let respjson = await resp.json();
        setTodos(respjson);
        setLoader(false);
    }
    return (
        <View>
            <Header />
            <View style={{ backgroundColor: 'white' }}>
                <ActivityIndicator size="large" color="#0000ff" animating={showLoader} />
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <ToDoItem item={item} />
                    )}
                    keyExtractor={(item) => item.key = item.id}
                />
            </View>
        </View>
    );
}
export default HomeScreen;
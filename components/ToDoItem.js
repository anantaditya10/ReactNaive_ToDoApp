import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ToDoItem({ item }) {
    return (
        <View style={styles.item}>
            <Text style={styles.textNum}>{item.id}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.completed ? require('../assets/check.png') :
                require('../assets/uncheck.png')} style={{ height: 25, width: 25 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
    },
    textNum: {
        fontSize: 15,
        color: '#00b294',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 15,
        color: '#000',
        width: '80%'
    }
})
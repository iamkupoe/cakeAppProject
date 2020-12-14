import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Rectangle() {
    return (
        <View style={styles.indicator}></View>
    )
}

const styles = StyleSheet.create({
    indicator:{
        backgroundColor:"blue",
        height:10,
        width:30,
        borderRadius:5,
        marginHorizontal:2,
        
      },
})
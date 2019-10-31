import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HeaderTitle extends Component {
    render() {
      return (
        <View
            style={styles.container}>
            <Text style={styles.title}>carona</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    title:{
        fontSize:28,
        fontWeight:'900',
        fontStyle:'italic',
        color:'#009648'
    }
})
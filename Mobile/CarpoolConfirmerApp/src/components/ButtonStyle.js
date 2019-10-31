import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class ButtonStyle extends Component {
    render() {
        const { title, onPress, loading } = this.props;
        return (
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    if (!loading) 
                    onPress()
                }}>
                {
                    !loading && 
                    <Text style={styles.buttonText}>{title}</Text>
                }
                {
                    loading && 
                    <ActivityIndicator
                        size='large'
                        color='white'/>
                }
            </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#009648',
        width:225,
        height:60,
        borderRadius:30,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    },
})
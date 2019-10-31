import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class ConfirmedScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location:''
        }
    }

    shareLocation() {
        Geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                this.setState({location});
            },
            error => alert('Ocorreu um erro ao tentar consultar a localização. Por favor, tente novamente.'),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    displayAction() {
        if (!this.state.location) {
            return <TouchableOpacity style={styles.button}
                    onPress={() => this.shareLocation()}>
                    <Text style={styles.buttonText}>Compartilhar Localização</Text>
                </TouchableOpacity>
        }
        return <View style={styles.confirmed}>
                <Image style={styles.pin} source={require('../../resources/images/pin.png')}/>
                <Text style={styles.confirmedText}>Carona confirmada!</Text>
                <Text style={styles.confirmedSubText}>Distância do motorista 0 KM</Text>
            </View>
    }

    render() {
        return (
            <View style={styles.container}>
                { this.displayAction() }
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
    confirmed:{
        alignItems:'center',
        justifyContent:'center'
    },
    pin:{
        width:150,
        height:150
    },
    confirmedText:{
        marginTop:15,
        color:'#000',
        fontWeight:'bold',
        fontSize:24
    },
    confirmedSubText:{
        color:'#7a7a7a',
        fontSize:18
    }
});

ConfirmedScreen.navigationOptions = {
    title:'Confirmação'
}

export default ConfirmedScreen;
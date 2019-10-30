import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Geolocation from '@react-native-community/geolocation';

class DriverScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qrcode:'empty',
            location:''
        }
    }

    componentDidMount() {
        this.setState({
            qrcode:'Agora sim!'
        });
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
        return <Text style={styles.sharedText}>Localização compartilhada!</Text>
    }

    render() {
        const { qrcode } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.helper}>Mostre para o caroneiro realizar a leitura do QR Code abaixo.</Text>
                <QRCode 
                    size={225}
                    value={qrcode}
                />
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
    helper:{
        marginHorizontal:30,
        marginBottom:45,
        fontSize:18,
        textAlign:'center'
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
    sharedText:{
        height:60,
        marginTop:30,
        color:'#000',
        fontWeight:'bold',
        fontSize:16
    }
});

DriverScreen.navigationOptions = {
    title:'Motorista'
}

export default DriverScreen;

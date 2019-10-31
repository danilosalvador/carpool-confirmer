import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Geolocation from '@react-native-community/geolocation';
import ButtonStyle from '../components/ButtonStyle';

class DriverScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qrcode:'empty',
            location:'',
            loading:false
        }
    }

    componentDidMount() {
        this.setState({
            qrcode:'Agora sim!'
        });
    }

    shareLocation() {
        this.setState({
           loading:true 
        }, 
        ()=> {
            Geolocation.getCurrentPosition(
                position => {
                    const location = JSON.stringify(position);
                    this.setState({location, loading:false});
                },
                error => alert('Ocorreu um erro ao tentar consultar a localização. Por favor, tente novamente.'),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
            );
        });
    }

    displayAction() {
        if (!this.state.location) {
            return (
                <ButtonStyle
                    onPress={() => this.shareLocation()}
                    title='Compartilhar Localização'
                    loading={this.state.loading}/>
            );
        }
        return (
            <View style={styles.sharedContainer}>
                <Text style={styles.sharedText}>Localização compartilhada!</Text>
            </View>
        );
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
    sharedContainer:{
        height:60,
        marginTop:30,
        alignItems:'center',
        justifyContent:'center'
    },
    sharedText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:16
    }
});

DriverScreen.navigationOptions = {
    title:'Motorista'
}

export default DriverScreen;

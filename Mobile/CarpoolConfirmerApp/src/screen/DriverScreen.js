import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator 
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Geolocation from '@react-native-community/geolocation';
import ButtonStyle from '../components/ButtonStyle';
import DriverApi from "../api/DriverApi";

class DriverScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            motoristaId:'',
            qrcode:'empty',
            location:'',
            generating:true,
            error:false,
            loading:false
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {

        this.setState({
            generating:true,
            error:false
        },
        () => {

            const dateTimeRequest = new Date().toISOString();

            DriverApi.createDriver(dateTimeRequest)
                .then(data => {
                    this.setState({
                        motoristaId:data.id,
                        qrcode:`${data.id};${dateTimeRequest}`,
                        generating:false,
                        error:false
                    });
                })
                .catch(e => {
                    this.setState({
                        generating:false,
                        error:true
                    });
                    alert(e);
                });
        });
    }

    shareLocation() {
        this.setState({
           loading:true 
        }, 
        ()=> {
            Geolocation.getCurrentPosition(
                position => {
                    const location = {
                        latitude:position.coords.latitude, 
                        longitude:position.coords.longitude
                    };
                    DriverApi.locationDriver(
                        this.state.motoristaId, location)
                        .then(data => {
                            if (data.result) {
                                this.setState({location, loading:false});
                            } else {
                                alert('Nâo foi possível enviar sua localização. Tente novamente.');
                                this.setState({location:'', loading:false});
                            }
                        })
                        .catch(e => {
                            alert(e);
                            this.setState({location:'', loading:false});
                        });
                },
                error => {
                    alert('Ocorreu um erro ao tentar consultar sua localização. Por favor, tente novamente.')
                    this.setState({location:'', loading:false});
                },
                {enableHighAccuracy:false, timeout:20000, maximumAge:1000},
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
        const { qrcode, generating, error } = this.state;
        return (
            <View style={styles.container}>
            {
                (!error && !generating) &&
                <View style={styles.content}>
                    <Text style={styles.helper}>Mostre para o caroneiro realizar a leitura do QR Code abaixo.</Text>
                    <QRCode 
                        size={225}
                        value={qrcode}
                    />
                    { this.displayAction() }
                </View>
            }
            {
                (!error && generating) &&
                <ActivityIndicator
                    size='large'
                    color='#009648'/>
            }
            {
                (error && !generating) &&
                <ButtonStyle
                    onPress={() => this.loadData()}
                    title='Carregar novamente'
                    loading={generating}/>
            }
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
    content:{
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

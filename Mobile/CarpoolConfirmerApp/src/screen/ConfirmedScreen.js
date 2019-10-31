import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import ButtonStyle from '../components/ButtonStyle';
import PassengerApi from "../api/PassengerApi";

class ConfirmedScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location:'',
            loading:false,
            distance:''
        }
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
                    PassengerApi.completedDriver(this.props.navigation.getParam('idMotorista', '0'), location)
                        .then(data => {
                            if (data.result) {
                                this.setState({location, loading:false, distance:data.distance});
                            }
                            else {
                                alert('Não foi possível completar a solicitação. Tente novamente.');
                                this.setState({location:'', loading:false});
                            }
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
            <View style={styles.confirmed}>
                <Image style={styles.pin} source={require('../../resources/images/pin.png')}/>
                <Text style={styles.confirmedText}>Carona confirmada!</Text>
                <Text style={styles.confirmedSubText}>Distância do motorista {this.state.distance} KM</Text>
            </View>
        );
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
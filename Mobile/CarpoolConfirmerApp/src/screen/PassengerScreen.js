import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import PassengerApi from "../api/PassengerApi";

class PassengerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            helper:'Aponte para o QR Code do motorista'
        }
    }

    onRead = async (e) => {

        this.setState({
            helper:'Aguarde...'
        }, ()=> {

            if (e.data.includes(';')) {

                const datas = e.data.split(';');

                PassengerApi.validationDriver(datas[0])
                    .then(data => {
                        if (data.result) {
                            this.props.navigation.replace('Confirmed', {
                                idMotorista:datas[0]
                            });
                        } else {
                            alert('QR Code não foi encontrado.');
                            this.props.navigation.pop();
                        }
                    })
                    .catch(e => {
                        alert(e);
                        this.props.navigation.pop();
                    });
            } else {
                alert('QR Code inválido.');
                this.props.navigation.pop();
            }
        });
   };

   render() {
       return (
           <View style={styles.container}>
               <QRCodeScanner
                   onRead={this.onRead}
                   showMarker={true}
                   checkAndroid6Permissions={true}
                   bottomContent={
                       <View style={styles.content}>
                           <Text style={styles.helper}>{this.state.helper}</Text>
                       </View>
                   } />
           </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection:'column',
       backgroundColor:'black'
     },
     content: {
       padding:40
     },
     helper: {
       fontSize:22,
       color:'#009648',
        textAlign:'center'
     },
     cameraContainer: {
       height: Dimensions.get('window').height,
     }
});

PassengerScreen.navigationOptions = {
   title:'Caroneiro'
}

export default PassengerScreen;
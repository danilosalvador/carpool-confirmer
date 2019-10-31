import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class PassengerScreen extends Component {

   onRead = async (e) => {
       this.props.navigation.push('Confirmed', {
           code:e.data
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
                           <Text style={styles.helper}>Aponte para o QR Code do motorista</Text>
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
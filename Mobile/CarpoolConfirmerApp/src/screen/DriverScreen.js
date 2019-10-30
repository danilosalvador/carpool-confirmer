import React, { Component } from 'react';
import {
    View
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class DriverScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qrcode:'empty'
        }
    }

    componentDidMount() {
        this.setState({
            qrcode:'Agora sim!'
        });
    }

    render() {
        const { qrcode } = this.state;
        return (
            <View>
                <QRCode
                    value={qrcode}/>
            </View>
        );
    }
}

DriverScreen.navigationOptions = {
    title:'Motorista'
}

export default DriverScreen;

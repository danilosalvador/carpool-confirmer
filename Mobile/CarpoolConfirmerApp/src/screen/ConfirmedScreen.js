import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

class ConfirmedScreen extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.navigation.getParam('code', 'fail')}</Text>
            </View>
        )
    }
}

ConfirmedScreen.navigationOptions = {
    title:'Confirmado'
}

export default ConfirmedScreen;
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class HomeScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.push ('Driver')}>
                    <Text>Motorista</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.push('Passenger')}>
                    <Text>Caroneiro</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent:'center',
        margin:20
    }
});

HomeScreen.navigationOptions = {
    title:'Capool Confirmer'
}

export default HomeScreen;
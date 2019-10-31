import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle'

class HomeScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground 
                        style={styles.welcomeImage}
                        source={require('../../resources/images/home_top-image.png')}>
                        <Text style={styles.welcomeText}>Bem vindo</Text>
                    </ImageBackground>
                    <View style={styles.content}>
                        <Text style={styles.helper}>Selecione um perfil abaixo</Text>
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.push ('Driver')}>
                            <Text style={styles.buttonText}>Motorista</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.push('Passenger')}>
                            <Text style={styles.buttonText}>Caroneiro</Text>
                        </TouchableOpacity> 
                        <Text></Text>
                    </View>
                    <Text style={styles.developement}>Desenvolvido por Danilo Salvador</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    welcomeImage:{
        alignSelf:'stretch',
        height:150,
        justifyContent:'flex-end'
    },
    welcomeText:{
        marginLeft:20,
        marginBottom:35,
        color:'white',
        fontSize:40
    },
    content:{
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        marginTop:-15
    },
    helper:{
        fontSize:18,
        marginTop:30,
        marginBottom:15,
    },
    button:{
        backgroundColor:'#009648',
        width:250,
        height:60,
        borderRadius:30,
        margin:15,
        alignItems:'center',
        justifyContent:'center' 
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    },
    developement:{
        margin:30,
        fontSize:16,
        color:'#7a7a7a',
        fontStyle:'italic'
    }
});

HomeScreen.navigationOptions = {
    headerTitle: () => <HeaderTitle />
}

export default HomeScreen;
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ButtonStyle from '../components/ButtonStyle';

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
                        <ButtonStyle
                            onPress={() => navigation.push ('Driver')}
                            title='Motorista'/>
                        <ButtonStyle
                            onPress={() => navigation.push ('Passenger')}
                            title='Caroneiro'/>
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
    developement:{
        margin:60,
        fontSize:15,
        color:'#7a7a7a',
        fontStyle:'italic'
    }
});

HomeScreen.navigationOptions = {
    headerTitle: () => <HeaderTitle />
}

export default HomeScreen;
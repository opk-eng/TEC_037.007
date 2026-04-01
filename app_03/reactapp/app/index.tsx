import { View, StyleSheet, Image, Text } from 'react-native';

export default function Index() {
    return (
        <View style={estilo.container}>
            <Image source={require("@/assets/images/header_logo.svg")} />
            <Text style={estilo.titulo}>React Native</Text>
            <Text>Aprenda uma vez, execute em qualquer lugar</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1, //prioridade 
        backgroundColor: 'rgb(27, 27, 29)', //cor de fundo
        justifyContent: 'center', //alinhar no centro horizontal
        alignItems: 'center' //alinhar no centro vertical
    } ,
    titulo: {
        fontSize: 40, //tamanho da fonte
        fontWeight: 700,
        color: 'white' //cor da fonte
    }
})
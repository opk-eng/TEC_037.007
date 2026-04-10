import {View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/globalStyles';

export default function Index() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.title}>Pagina Inicial</Text>
            <Link style={estilos.button} href="/detalhes">
                Detalhes
            </Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        color: 'blue',
        fontSize: 18,
    },
});
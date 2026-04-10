import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import { estilos } from '@/constants/globalStyles';
export default function Detalhes() {
  const router = useRouter();
  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Pagina de Detalhes</Text>
      <Link href="/login" style={estilos.button}>
        Sair
      </Link>
      <Button title='Realizar Logout' onPress={() => router.replace('/login')} />
    </View>
  );
}
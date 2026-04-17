import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function SobreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Cabeçalho com botão voltar */}
      <View style={styles.header}>
        <Text style={styles.title}>Sobre</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>Voltar</Text>
        </Pressable>
      </View>

      {/* Conteúdo scrollável */}
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bem-vindo ao SENAI</Text>
          <Text style={styles.text}>
            O SENAI (Serviço Nacional de Aprendizagem Industrial) é uma instituição brasileira de educação profissional e tecnológica, vinculada à Confederação Nacional da Indústria (CNI).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa Missão</Text>
          <Text style={styles.text}>
            Promover a educação para o trabalho, contribuindo para o desenvolvimento econômico e social do Brasil através de formação profissional de qualidade.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossos Serviços</Text>
          <Text style={styles.text}>
            Oferecemos cursos de formação inicial e continuada, aprendizagem industrial, educação técnica e superior, além de serviços de consultoria e inovação para as empresas.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Este Aplicativo</Text>
          <Text style={styles.text}>
            Este aplicativo foi desenvolvido como parte de uma avaliação prática, demonstrando o uso de React Native com Expo Router para criar interfaces móveis responsivas e intuitivas.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    fontSize: 16,
    color: '#0a7ea4',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
});

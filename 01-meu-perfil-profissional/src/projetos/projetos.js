import { View, Text } from 'react-native';
import styles from './styles';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Projetos:</Text>
      <Text style={styles.texto}>Projeto Chico: Como Infernizar a Vida do Cachorro (coitado)</Text>
      <Text style={styles.texto}></Text>
    </View>
  );
}


import { View, Text } from 'react-native';
import styles from './styles';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Formação:</Text>
      <Text style={styles.texto}>Bacharel em Morder Canelas</Text>
      <Text style={styles.texto}>Pós-graduação em Derrubar Coisas</Text>
    </View>
  );
}

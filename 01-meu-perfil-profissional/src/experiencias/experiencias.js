import { View, Text } from 'react-native';
import styles from './styles';

export default function Experiencias() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Experiências:</Text>
      <Text style={styles.texto}>Caçadora de bicho</Text>
      <Text style={styles.texto}>Amassar pãozinho (padeira)</Text>
    </View>
  );
}

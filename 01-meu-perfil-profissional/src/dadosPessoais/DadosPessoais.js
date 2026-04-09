import { View, Text } from 'react-native';
import styles from './styles';

export default function DadosPessoais() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitulo}>Dados Pessoais:</Text>
      <Text style={styles.texto}>Nome: Juju</Text>
      <Text style={styles.texto}>Idade: 1 ano e 8 meses</Text>
      <Text style={styles.texto}>Espécie: Gata (porém há dúvidas)</Text>
    </View>
  );
}

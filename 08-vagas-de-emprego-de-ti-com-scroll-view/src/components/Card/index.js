import { View, Text } from 'react-native';
import styles from './styles';

function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>
        <Text style={styles.textoBold}>Salário: </Text>
        R${props.salario}
      </Text>
      <Text style={styles.texto}>
        <Text style={styles.textoBold}>Descrição: </Text>
        {props.descricao}
      </Text>
      <Text style={styles.texto}>
        <Text style={styles.textoBold}>Contato: </Text>
        {props.contato}
      </Text>
    </View>
  );
}

export default Card;
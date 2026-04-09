import { View, Image, Text } from 'react-native';
import styles from './styles';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: props.imagem }} 
        style={styles.foto}
      />
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.descricao}>{props.descricao}</Text>
    </View>
  );
}

export default Card
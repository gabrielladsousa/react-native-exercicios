import { Button, View } from 'react-native';
import styles from './styles'

export default function Botao(props) {
  return (
    <View style={styles.contorno}>
      <Button
        title={props.titulo}
        color={props.cor}
        onPress={props.onPress}
      />
    </View>
  );
}
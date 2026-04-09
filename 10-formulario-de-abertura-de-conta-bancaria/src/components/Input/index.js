import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.valor}
        onChangeText={props.onChange}
        keyboardType={props.tipo}
      />
    </View>
  );
}
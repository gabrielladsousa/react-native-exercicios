import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function Seletor(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Picker
        style={styles.picker}
        selectedValue={props.valor}
        onValueChange={(itemValue) => props.onChange(itemValue)}
      >
        {props.opcoes.map((item, index) => (
          <Picker.Item
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
}
import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../../components/Input/index';
import styles from './styles';

function Multiplicar() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  function calcular() {
    if (num1 === '' || num2 === '') {
      alert('Digite dois números!');
      return;
    }
    setResult(num1 * num2);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <Input
        placeholder="Digite o primeiro nº"
        value={num1}
        onChangeText={setNum1}
      />

      <Input
        placeholder="Digite o segundo nº"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.contorno}>
      <Button title="Calcular" onPress={calcular} />
      </View>

      <Text style={styles.textoResultado}>Resultado: {result}</Text>
    </View>
  );
}

export default Multiplicar;
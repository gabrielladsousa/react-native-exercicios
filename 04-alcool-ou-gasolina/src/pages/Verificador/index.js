import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../../components/Input/index';
import Imagem from '../../components/Imagem/index';
import styles from './styles';

function Verificar() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [result, setResult] = useState('');

  function verificar() {
    if (alcool === "" || gasolina === "" || alcool <= 0 || gasolina <= 0) {
        alert("Digite valores válidos!");
        return;
    }

    const calculo = alcool/gasolina;

    if (calculo < 0.7) {
      setResult('Álcool é melhor para abastecer');
    } else {
      setResult('Gasolina é melhor');
    }
  }

  function resetar(){
    setAlcool('');
    setGasolina('');
    setResult('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Imagem />
      
      <Input
        placeholder="Preço do álcool"
        value={alcool}
        onChangeText={setAlcool}
      />
      <Input
        placeholder="Preço da gasolina"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <View style={styles.contorno}>
        <Button title="Verificar" onPress={verificar} />
        <Button title="Resetar" onPress={resetar} color="black" />
      </View>

      <Text style={styles.textoResultado}>Resultado: {result}</Text>
    </View>
  );
}

export default Verificar;
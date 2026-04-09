import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../../components/Input/index';
import Imagem from '../../components/Imagem/index';
import styles from './styles';

function Calcular() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [result, setResult] = useState('');

  function verificar() {
    if (peso === "" || altura === "" || peso <= 0 || altura <= 0) {
      alert("Digite valores válidos");
      return;
    }

    let pesoValor = parseFloat(peso);
    let alturaValor = parseFloat(altura);

    if (alturaValor > 3) {
      alturaValor = alturaValor / 100;
    }

    const imc = pesoValor / (alturaValor * alturaValor);

    if (imc < 18.5) {
      setResult('Abaixo do peso');
    } else if (imc <= 24.9) {
      setResult('Peso normal');
    } else if (imc <= 29.9) {
      setResult('Sobrepeso');
    } else if (imc <= 34.9) {
      setResult('Obesidade Grau I');
    } else if (imc <= 39.9) {
      setResult('Obesidade Grau II');
    } else {
      setResult('Obesidade Grau III');
    }
  }

  function resetar(){
    setPeso('');
    setAltura('');
    setResult('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Imagem />

      <Input
        placeholder="Peso"
        value={peso}
        onChangeText={setPeso}
      />
      <Input
        placeholder="Altura"
        value={altura}
        onChangeText={setAltura}
      />

      <View style={styles.contorno}>
        <Button title="Verificar" onPress={verificar} />
        <Button title="Resetar" onPress={resetar} color="black" />
      </View>

      <Text style={styles.textoResultado}>Classificação: {result}</Text>
      
    </View>
  );
}

export default Calcular;
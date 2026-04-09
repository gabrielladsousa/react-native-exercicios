import { useState } from 'react';
import { View, Text } from 'react-native';
import Botao from '../../components/Botao'
import styles from './styles';

function Contador() {

  const [num, setNum] = useState(0);

  function incrementar() {
    setNum(num + 1);
  }

  function decrementar() {
    if(num > 0){ 
      setNum(num - 1) 
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <View style={styles.box}>
        <Text style={styles.numero}>{num}</Text>
      </View>

      <Botao titulo="+" cor="green" onPress={incrementar} />
      <Botao titulo="−" cor="red" onPress={decrementar} />

    </View>
  );
}

export default Contador;
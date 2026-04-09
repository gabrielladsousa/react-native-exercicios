import { useState } from 'react';
import { View, Text, Button} from 'react-native';
import Imagem from '../../components/Imagem/index';
import styles from './styles';

function Jogo() {
  const [result, setResult] = useState('');

  function descobrir() {
    let num = Math.floor(Math.random() * 11);
    setResult(num);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo do nº Aleatório</Text>

      <Imagem />

      <Text style={styles.texto}>Pense em um número de 0 a 10</Text>
      <Text style={styles.textoResultado}>{result}</Text>
      <Text style={styles.barraResultado}>___________________</Text>

      <View style={styles.contorno}>
        <Button title="Descobrir" onPress={descobrir} color="green"/>
      </View>
      
    </View>
  );
}

export default Jogo;
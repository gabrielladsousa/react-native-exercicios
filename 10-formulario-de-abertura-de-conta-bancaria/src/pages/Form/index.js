import { View, Text, Button, Switch } from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

import Input from '../../components/Input/index';
import Seletor from '../../components/Picker/index';
import styles from './styles';

export default function Formulario() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('M');
  const [escolaridade, setEscolaridade] = useState('Fundamental');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);

  const [nomeResult, setNomeResult] = useState('');
  const [idadeResult, setIdadeResult] = useState('');
  const [sexoResult, setSexoResult] = useState('');
  const [escResult, setEscResult] = useState('');
  const [limiteResult, setLimiteResult] = useState(0);
  const [braResult, setBraResult] = useState(false);

  function confirmar() {
    if (nome === '' || idade === '' || limite === 0) {
      alert('Preencha todos os dados antes de confirmar!');
      return;
    }

    let idadeNumero = Number(idade);
    
    if (idade != idadeNumero || idadeNumero <= 0) {
      alert('A idade deve ser um número positivo.');
      return;
    }
    
    setNomeResult(nome);
    setIdadeResult(idade);
    setSexoResult(sexo);
    setEscResult(escolaridade);
    setLimiteResult(limite);
    setBraResult(brasileiro);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>
      <Input
        label="Nome:"
        valor={nome}
        onChange={setNome}
      />
      <Input
        label="Idade:"
        valor={idade}
        onChange={setIdade}
        tipo="numeric"
      />
      <Seletor
        label="Sexo:"
        valor={sexo}
        onChange={setSexo}
        opcoes={[
          { label: 'Masculino', value: 'M' },
          { label: 'Feminino', value: 'F' }
        ]}
      />
      <Seletor
        label="Escolaridade:"
        valor={escolaridade}
        onChange={setEscolaridade}
        opcoes={[
          { label: 'Fundamental', value: 'Fundamental' },
          { label: 'Médio', value: 'Médio' },
          { label: 'Superior', value: 'Superior' }
        ]}
      />

      <View style={styles.sliderContainer}>
        <View style={styles.sliderLinha}>
          <Text style={styles.label}>Limite:</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000}
            value={limite}
            onValueChange={(v) => setLimite(v)}
            step={1}
            minimumTrackTintColor="purple"
            maximumTrackTintColor="gray"
            thumbTintColor="purple"
          />
        </View>
        <Text style={styles.valor}>{limite.toFixed(0)}</Text>
      </View>

      <View style={styles.switchArea}>
        <Text style={styles.label}>Brasileiro:  </Text>
        <Switch
          value={brasileiro}
          onValueChange={setBrasileiro}
          thumbColor='orange'
        />
      </View>

      <Button title="Confirmar" onPress={confirmar} color="black" />

      <View style={styles.resultadoContainer}>
        <Text style={styles.subtitulo}>Dados informados:</Text>
        <Text>Nome: {nomeResult}</Text>
        <Text>Idade: {idadeResult}</Text>
        <Text>Sexo: {sexoResult}</Text>
        <Text>Escolaridade: {escResult}</Text>
        <Text>Limite: {limiteResult.toFixed(0)}</Text>
        <Text>
          Brasileiro: {braResult ? 'Sim' : 'Não'}
        </Text>
      </View>
    </View>
  );
}
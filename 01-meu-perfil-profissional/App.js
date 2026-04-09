import { StyleSheet, View } from 'react-native';

import ProfileImage from './src/imagem/ProfileImage';
import DadosPessoais from './src/dadosPessoais/DadosPessoais';
import Formacao from './src/formacao/formacao';
import Experiencias from './src/experiencias/experiencias';
import Projetos from './src/projetos/projetos';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <DadosPessoais />
      <Formacao />
      <Experiencias />
      <Projetos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4e5397',
    padding: 8,
  },
});

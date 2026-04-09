import { View, ScrollView, Text } from 'react-native';
import Card from '../../components/Card/index';
import styles from './styles';

function Vagas() {
  let vagas = [
    {
      titulo: 'Desenvolvedor Backend',
      salario: 3000.00,
      descricao: 'Responsável pelo desenvolvimento e manutenção de APIs REST utilizando Node.js e banco de dados SQL.',
      contato: 'backend@empresa.com'
    },
    {
      titulo: 'Engenheiro de Dados',
      salario: 15000.00,
      descricao: 'Criação de pipelines de dados, modelagem em Data Warehouse e integração com ferramentas de BI.',
      contato: 'dados@empresa.com'
    },
    {
      titulo: 'Desenvolvedor Frontend',
      salario: 4500.00,
      descricao: 'Desenvolvimento de interfaces responsivas utilizando React e integração com APIs.',
      contato: 'frontend@empresa.com'
    },
    {
      titulo: 'Analista de Sistemas',
      salario: 5200.00,
      descricao: 'Levantamento de requisitos, documentação técnica e apoio no desenvolvimento de soluções corporativas.',
      contato: 'analista@empresa.com'
    },
    {
      titulo: 'Desenvolvedor Mobile',
      salario: 6000.00,
      descricao: 'Criação de aplicativos móveis utilizando React Native com integração a serviços web.',
      contato: 'mobile@empresa.com'
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.scroll}>
        {vagas.map((item, index) => (
          <Card 
            key={index} 
            titulo={item.titulo}
            salario={item.salario} 
            descricao={item.descricao} 
            contato={item.contato} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Vagas;
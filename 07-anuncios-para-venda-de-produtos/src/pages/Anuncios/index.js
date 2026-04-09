import { View, ScrollView, Text } from 'react-native';
import Card from '../../components/Card/index';
import styles from './styles';

function Anuncios() {
  let produtos = [
    {
      titulo: 'CD Twilight',
      descricao: 'CD com a trilha sonora oficial de Twilight, com todas as músicas que marcaram a saga. Produto original, em ótimo estado, ótimo para fãs e colecionadores.',
      imagem: 'https://m.media-amazon.com/images/I/815NHZMF6-L._UF1000,1000_QL80_.jpg'
    },
    {
      titulo: 'DVD Avatar',
      descricao: 'DVD do filme Avatar em edição especial, com extras exclusivos e ótima qualidade de imagem e som. Produto original, em excelente estado.',
      imagem: 'https://i.ebayimg.com/images/g/PeIAAOxy4kpQ9qO2/s-l1200.webp'
    },
    {
      titulo: 'CD Tzuyu',
      descricao: 'CD com músicas de Tzuyu, incluindo seus maiores singles. Produto original, ótimo estado, perfeito para fãs e colecionadores de K-pop.',
      imagem: 'https://st.cdjapan.co.jp/pictures/l/14/40/NEODAI-213445.jpg'
    },
    {
      titulo: 'CD Arirang',
      descricao: 'O 5º álbum de estúdio do BTS, "ARIRANG", é uma obra-prima que funde a tradição coreana com a sonoridade pop moderna que definiu uma geração.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxeXqTOm8Fz3EtyTSABac99fpjRaj9lbU5g&s'
    },
    {
      titulo: 'DVD Aladdin',
      descricao: 'DVD do clássico Aladdin da Disney! Aventura, magia e diversão para toda a família. Produto original, em ótimo estado.',
      imagem: 'https://lumiere-a.akamaihd.net/v1/images/eu_aladdin-movie_hero-v2_m_56f82451.jpeg?region=0,0,750,668'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scroll}>
        {produtos.map((item, index) => (
          <Card 
            key={index} 
            titulo={item.titulo} 
            descricao={item.descricao} 
            imagem={item.imagem} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Anuncios;
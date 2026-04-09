import { Image } from 'react-native';
import styles from './styles';

function Imagem() {
    let img = 'https://static.bancointer.com.br/blog/grid-images/87b379071ea548869ccd9d51c29c2c4f_alcool-ou-gasolina.webp';

    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}

export default Imagem;
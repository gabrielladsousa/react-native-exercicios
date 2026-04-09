import { Image } from 'react-native';
import styles from './styles';

function Imagem() {
    let img = 'https://uploads.mudspike.com/original/3X/8/3/8362fa17c2d69eb4c6f11eba355087a383462875.png';

    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}

export default Imagem;
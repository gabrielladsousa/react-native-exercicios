import { Image } from 'react-native';
import styles from './styles';

function Imagem() {
    let img = 'https://media.brainly.com.br/image/rs:fill/w:1080/q:75/plain/https://pt-static.z-dn.net/files/de4/edfe0d6c061f5472640319f0b467c479.png';

    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}

export default Imagem;
import { View, Image } from 'react-native';
import styles from './styles';

export default function ProfileImage() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('../../assets/cat-juju.png')} />
    </View>
  );
}


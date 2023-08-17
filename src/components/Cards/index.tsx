import { TouchableOpacity, ImageBackground, Text, View } from 'react-native';

import styles from './styles';
import { THEME } from '../../themes/index';
import Entypo from 'react-native-vector-icons/Entypo';

export function Cards({ navigation, item }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
      <ImageBackground
        source={{ uri: item.img }}
        style={styles.discoverItem}
        imageStyle={styles.discoverItemImage}
      >
        <Text style={styles.discoverItemTitle}>{item.name}</Text>
        <View style={styles.discoverItemLocationWrapper}>
          <Entypo
            name="location-pin"
            size={18}
            color={THEME.COLORS.WHITE}
          />
          <Text style={styles.discoverItemLocationText}>{item.tag}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

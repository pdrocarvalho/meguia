import { ImageBackground, TouchableOpacity, View, Text, ScrollView } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import { styles } from './styles';
import { THEME } from '../../themes';

type itemProps = {
  item: {
    description: string;
    formatted_address: string;
    id: string;
    img: string;
    name: string;
    place_id: string;
    tag: string;
    url: string;
    isCovered: boolean;
    weekday_text?: [string];
  };
};

export function Details({ route, navigation }: any) {
  const { item }: itemProps = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.img }}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo
            name="chevron-left"
            size={32}
            color={THEME.COLORS.WHITE}
          />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <View style={styles.locationWrapper}>
            <Entypo
              name="location-pin"
              size={24}
              color={THEME.COLORS.WHITE}
            />
            <Text style={styles.locationText}>{item.tag}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <ScrollView>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

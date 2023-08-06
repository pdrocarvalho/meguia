import {
  View,
  ScrollView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  PointProp,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
//import { collection, getDocs } from '@firebase/firestore';

import firestore from '@react-native-firebase/firestore';
import discoverData from '../../../assets/data/discoverData';
import { dataBase } from '../../services/firebaseConfig';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { THEME } from '../../themes';
import styles from './styles';

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
  };
};

type PlacesProps = {
  description: string;
  formatted_address: string;
  id: string;
  img: string;
  loc: string;
  name: string;
  place_id: string;
  tag: string;
  types: string;
  url: string;
};

export function Home({ navigation }: any) {
  const [places, setPlaces] = useState<PlacesProps[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<PlacesProps[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const subscribe = async () => {
      await firestore()
        .collection('points')
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          }) as PlacesProps[];

          setPlaces(data);
          setFilteredPlaces(data);
        });
    };

    subscribe();
  }, []);

  const searchFilter = (searchText: string) => {
    if (searchText) {
      const newData = places.filter((item) => {
        const itemData = item.name ? item.name.toLowerCase() : ''.toLowerCase();
        const searchTextData = searchText.toLowerCase();

        return itemData.indexOf(searchTextData) > -1;
      });

      setFilteredPlaces(newData);
      setSearchText(searchText);
    } else {
      setFilteredPlaces(places);
      setSearchText(searchText);
    }
  };

  const renderDiscoverItem = ({ item }: itemProps) => {
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
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          {/* Header */}

          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={THEME.COLORS.BLACK}
            />
            <Image
              source={require('../../assets/pictures/person.png')}
              style={styles.profileImage}
            />
          </View>

          {/*Discover*/}
          <View style={styles.discoverWrapper}>
            <Text style={styles.discoverTitle}>Descubra</Text>
            <View style={styles.discoverSearchWrapper}>
              <TextInput
                style={styles.discoverSearchBox}
                onChangeText={(searchText) => searchFilter(searchText)}
                placeholder="Pra onde quer ir...?"
                value={searchText}
              />
              <Entypo
                style={styles.discoverSeacrhIcon}
                name="magnifying-glass"
                size={22}
                color={THEME.COLORS.DARKGREY}
              />
            </View>
            <View style={styles.discoverCategoryWrapper}>
              <Text style={[styles.discoverCategoryText, { color: THEME.COLORS.PRIMARY }]}>
                Todos
              </Text>
              <Text style={styles.discoverCategoryText}>Praias</Text>
              <Text style={styles.discoverCategoryText}>Pontos Turísticos</Text>
            </View>
          </View>
          <View style={styles.discoverItemWrapper}>
            <FlatList
              data={filteredPlaces}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

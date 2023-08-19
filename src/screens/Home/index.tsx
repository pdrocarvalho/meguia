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
import { Cards } from '../../components/Cards';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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

type placeData = {
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
  const [rawPlaces, setRawPlaces] = useState<placeData[]>([]);
  const [places, setPlaces] = useState<placeData[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<placeData[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [tagText, setTagText] = useState<string>(null);

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
          }) as placeData[];
          setRawPlaces(data);
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

  const tagFilter = (tagText: string) => {
    if (tagText != null) {
      const newData = rawPlaces.filter((item) => {
        const itemData = item.tag ? item.tag.toLowerCase() : ''.toLowerCase();
        const tagTextData = tagText.toLowerCase();

        return itemData.indexOf(tagTextData) > -1;
      });
      setFilteredPlaces(newData);
      setPlaces(newData);
    } else {
      setFilteredPlaces(rawPlaces);
      setPlaces(rawPlaces);
    }
  };

  const renderDiscoverItem = ({ item }: itemProps) => {
    return (
      <Cards
        navigation={navigation}
        item={item}
      />
    );
  };

  function signOut() {
    auth().signOut();
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}

        <View style={styles.menuWrapper}>
          <Feather
            name="menu"
            size={32}
            color={THEME.COLORS.BLACK}
          />
          <TouchableOpacity onPress={signOut}>
            <Image
              source={require('../../assets/pictures/person.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
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
            <TouchableOpacity onPress={() => tagFilter(null)}>
              <Text style={[styles.discoverCategoryText, { color: THEME.COLORS.PRIMARY }]}>
                Todos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tagFilter('praia')}>
              <Text style={styles.discoverCategoryText}>Praias</Text>
            </TouchableOpacity>
            <Text style={styles.discoverCategoryText}>Pontos Turísticos</Text>
          </View>
        </View>
        <View style={styles.discoverItemWrapper}>
          <FlatList
            data={filteredPlaces}
            renderItem={renderDiscoverItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

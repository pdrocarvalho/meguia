import { StyleSheet } from 'react-native';
import { Routes } from './src/routes';
import { useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato';

import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { Loading } from './src/components/Loading';

export default function App() {
  const [userData, setUserData] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUserData(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

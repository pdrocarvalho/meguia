import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { Input } from '../../Input';
import { MyButton } from '../../MyButton';
import { styles } from './styles';

export function SignInForm({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleSignIn(email: string, password: string) {
    setIsloading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        Alert.alert('Conta', 'Usuário logado com sucesso', [
          { text: 'Ok', onPress: () => navigation.navigate('Home') },
        ])
      )
      .catch((error) => {
        Alert.alert(error.message);
      })
      .finally(() => setIsloading(false));
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <MyButton
        onPress={() => handleSignIn(email, password)}
        title={'Entrar'}
        isLoading={isLoading}
      />
    </View>
  );
}

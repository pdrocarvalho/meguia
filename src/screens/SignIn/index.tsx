import React, { useState } from 'react';
import { Alert, Button, ScrollView, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { THEME } from '../../themes';
import Feather from 'react-native-vector-icons/Feather';

export function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(email, password) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Conta', 'Usuário logado com sucesso'))
      .catch((error) => {
        Alert.alert(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          {/*Header*/}
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={THEME.COLORS.BLACK}
            />
          </View>
          <View style={styles.loginWrapper}>
            <TextInput
              onChangeText={(value) => setEmail(value)}
              style={styles.emailTextInput}
            ></TextInput>
            <TextInput
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
              style={styles.emailTextInput}
            ></TextInput>
            <Button
              title="Entrar"
              onPress={() => handleSignIn(email, password)}
            />
            <Button
              title="Cadastrar"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

import { View, Text, ScrollView, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import { styles } from './styles';
import { THEME } from '../../themes';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp({ email, password }) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        Alert.alert('Conta', 'Usuário criado com sucesso!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email já está em uso');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Email inválido');
        }
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
              style={styles.emailTextInput}
              onChangeText={(emailInputText) => setEmail(emailInputText)}
            ></TextInput>
            <TextInput
              style={styles.emailTextInput}
              onChangeText={(passwordInputText) => setPassword(passwordInputText)}
            ></TextInput>
            <Button
              title="Cadastrar"
              onPress={() => handleSignUp({ email, password })}
            ></Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

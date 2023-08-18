import { View, Text, ScrollView, SafeAreaView, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

import { styles } from './styles';
import { THEME } from '../../themes';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';

function singUp({ email, password }) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      console.log(userCredentials);
    })
    .catch((error) => console.log(error));
}

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              onPress={() => singUp({ email, password })}
            ></Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

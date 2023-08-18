import React from 'react';
import { Button, ScrollView, TextInput, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { THEME } from '../../themes';
import Feather from 'react-native-vector-icons/Feather';

export function Login({ navigation }) {
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
            <TextInput style={styles.emailTextInput}></TextInput>
            <TextInput style={styles.emailTextInput}></TextInput>
            <Button title="SingIn"></Button>
            <Button
              title="Cadastrar"
              onPress={() => navigation.navigate('SignUp')}
            ></Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

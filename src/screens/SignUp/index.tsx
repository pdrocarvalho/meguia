import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';

import { styles } from './styles';

import { SignUpForm } from '../../components/Forms/SignUpForm';

export function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
        >
          <View style={styles.content}>
            <View style={styles.headerWrapper}>
              <Text style={styles.titleText}>Crie</Text>
              <Text style={styles.titleText}>sua conta</Text>
              <Text style={styles.subtitleText}>Faça seu cadastro rápido!</Text>
            </View>
            <View style={styles.formWrapper}>
              <SignUpForm navigation={navigation} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { THEME } from '../../themes';
import Feather from 'react-native-vector-icons/Feather';
import { SignInForm } from '../../components/Forms/SignInForm';

export function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
        >
          <View style={styles.content}>
            <View style={styles.headerWrapper}>
              <Text style={styles.titleText}>Explore!</Text>
              <Text style={styles.subtitleText}>Entre com sua conta</Text>
            </View>
            <View style={styles.loginWrapper}>
              <SignInForm navigation={navigation} />
            </View>
            <View style={styles.signUpWrapper}>
              <Text style={styles.signUpText}>Ainda não tem uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpLink}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

import { useState } from 'react';
import { Alert, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useForm } from 'react-hook-form';

import { ControlledInput } from '../../ControlledInput';
import { MyButton } from '../../MyButton';
import { styles } from './styles';

type SignInFormData = {
  email: string;
  password: string;
};

export function SignInForm({ navigation }) {
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsloading] = useState(false);

  function handleSignIn(data: SignInFormData) {
    setIsloading(true);
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
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
      <ControlledInput
        name="email"
        placeholder="Email"
        control={control}
      />
      <ControlledInput
        name="password"
        placeholder="Senha"
        control={control}
        secureTextEntry
      />

      <MyButton
        onPress={handleSubmit(handleSignIn)}
        title={'Entrar'}
        isLoading={isLoading}
      />
    </View>
  );
}

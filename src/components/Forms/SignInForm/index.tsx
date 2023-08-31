import { useState } from 'react';
import { Alert, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ControlledInput } from '../../ControlledInput';
import { MyButton } from '../../MyButton';
import { styles } from './styles';
import { signInSchema } from '../../../schemas/signInSchema';

type SignInFormData = {
  email: string;
  password: string;
};

export function SignInForm({ navigation }) {
  const [isLoading, setIsloading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

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
        error={errors.email}
      />
      <ControlledInput
        name="password"
        placeholder="Senha"
        control={control}
        error={errors.password}
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

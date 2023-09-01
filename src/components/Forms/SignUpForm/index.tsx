import { useState } from 'react';
import { View, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';

import { styles } from './style';

import { ControlledInput } from '../../ControlledInput';
import { MyButton } from '../../MyButton';
import { signUpSchema } from '../../../schemas/signUpSchema';

type SignUpFormData = {
  name?: string;
  email: string;
  password: string;
};

export function SignUpForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp(data: SignUpFormData) {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        Alert.alert('Conta', 'Usuário criado com sucesso!', [
          { text: 'ok', onPress: () => navigation.navigate('Home') },
        ]);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email já está em uso');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Email inválido');
        }
      })
      .finally(() => setIsLoading(false));
  }
  return (
    <View style={styles.container}>
      <ControlledInput
        name="name"
        placeholder="Nome"
        control={control}
        error={errors.name}
      />
      <ControlledInput
        name="email"
        placeholder="E-mail"
        control={control}
        error={errors.email}
      />
      <ControlledInput
        name="password"
        placeholder="Senha"
        secureTextEntry
        control={control}
        error={errors.password}
      />
      <ControlledInput
        name="password_confirm"
        placeholder="Confirme a senha"
        secureTextEntry
        control={control}
        error={errors.password_confirm}
      />
      <MyButton
        title="Cadastrar"
        onPress={handleSubmit(handleSignUp)}
        isLoading={isLoading}
      />
    </View>
  );
}

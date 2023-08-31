import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().email('Email inválido.').required('Informe seu email.'),
  password: yup.string().min(6, 'A senha é de 6 dígitos.').required('Informe sua senha.'),
});

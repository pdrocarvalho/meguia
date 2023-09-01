import * as yup from 'yup';

export const signUpSchema = yup.object({
  name: yup.string().required('Informe seu nome.'),
  email: yup.string().email('E-mail inválido.').required('Informe seu e-mail.'),
  password: yup
    .string()
    .min(6, 'Senha deve conter ao menos 6 dígitos.')
    .required('Informe uma senha.'),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não conferem')
    .required('Confirme a senha.'),
});

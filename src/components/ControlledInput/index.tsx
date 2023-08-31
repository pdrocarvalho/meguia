import { Text, TextInputProps } from 'react-native';
import { Control, Controller, FieldError } from 'react-hook-form';

import { Input } from '../Input';

import { styles } from './styles';

type Props = TextInputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </>
  );
}

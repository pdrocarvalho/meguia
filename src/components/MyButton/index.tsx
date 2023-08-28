import React from 'react';
import { TouchableOpacity, View, Text, Pressable, PressableProps } from 'react-native';

import { Loading } from '../Loading';

import { styles } from './styles';

type Props = PressableProps & {
  title: string;
  isLoading?: boolean;
};

export function MyButton({ title, isLoading, ...rest }: Props) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={styles.buttonContainer}
        disabled={isLoading}
        {...rest}
      >
        {isLoading ? <Loading /> : <Text style={styles.buttonText}>{title}</Text>}
      </Pressable>
    </View>
  );
}

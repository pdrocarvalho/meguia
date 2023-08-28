import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '90%',
    height: 35,
    elevation: 8,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

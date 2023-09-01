import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {},
  content: {
    marginVertical: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    display: 'flex',
    width: '90%',
    marginLeft: 50,
    marginBottom: 30,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleText: {
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 48,
    color: THEME.COLORS.PRIMARY,
  },
  subtitleText: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.DARKGREY,
    marginTop: 10,
    fontSize: 24,
    marginLeft: 3,
  },
  formWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {},
  content: {
    marginVertical: 180,
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
    marginBottom: 10,
  },
  subtitleText: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.DARKGREY,
    fontSize: 24,
    marginLeft: 3,
  },
  loginWrapper: {},
  signUpWrapper: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.DARKGREY,
    fontSize: 14,
  },
  signUpLink: {
    fontSize: 14,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    textDecorationLine: 'underline',
    color: THEME.COLORS.PRIMARY,
  },
});

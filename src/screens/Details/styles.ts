import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../themes';

const height = Dimensions.get('window').height; //Captura a altura da tela do dispositivo

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    height: 120,
    marginTop: -40,
    // borderRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  backIcon: {
    marginTop: 60,
    marginLeft: 20,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
  itemTitle: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 32,
    color: THEME.COLORS.PRIMARY,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 16,
    color: THEME.COLORS.WHITE,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 24,
    color: THEME.COLORS.BLACK,
  },
  descriptionText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 16,
    marginTop: 20,
    color: THEME.COLORS.DARKGREY,
  },
});

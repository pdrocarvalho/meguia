import { StyleSheet } from 'react-native';
import { THEME } from '../../themes/index';

const styles = StyleSheet.create({
  discoverItem: {
    width: 320,
    height: 210,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
  },
  discoverItemWrapper: {
    paddingVertical: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 18,
    color: THEME.COLORS.WHITE,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 14,
    color: THEME.COLORS.WHITE,
  },
});

export default styles;

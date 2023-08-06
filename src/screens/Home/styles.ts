import { StyleSheet } from 'react-native';

import { THEME } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: THEME.COLORS.WHITE,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 32,
  },
  discoverSearchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  discoverSearchBox: {
    height: 35,
    width: '95%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  discoverSeacrhIcon: {
    marginHorizontal: 5,
  },
  discoverCategoryWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 16,
    color: THEME.COLORS.GREY,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 15,
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

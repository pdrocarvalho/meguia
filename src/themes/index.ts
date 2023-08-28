type ThemeProps = {
  COLORS: {
    PRIMARY: string;
    SECONDARY: string;
    GREY: string;
    DARKGREY: string;
    BLACK: string;
    WHITE: string;
  };

  FONT_FAMILY: {
    REGULAR: string;
    BOLD: string;
    BLACK: string;
  };
};
export const THEME: ThemeProps = {
  COLORS: {
    PRIMARY: '#3A5447', //#3A0CA3
    SECONDARY: '#97DBB9', //#4361EE
    GREY: '#D1D3D3',
    DARKGREY: '#535454',
    BLACK: '#0C0f0E',
    WHITE: '#FBFCFE',
  },

  FONT_FAMILY: {
    REGULAR: 'Lato_400Regular',
    BOLD: 'Lato_700Bold',
    BLACK: 'Lato_900Black',
  },
};

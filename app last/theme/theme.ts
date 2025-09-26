// app/theme/theme.ts
import { I18nManager } from 'react-native';
import { TextStyle } from 'react-native';

const font = 'Vazir'
export const theme = {
  colors: {
    primary: '#6C63FF',
    secondary: '#FF9800',
    background: '#FFFFFF',
    text: '#222222',
    muted: '#888888',
    cardHolderBackColor: '#c2ffe8ff'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    title: {
      margin: 6,
      fontSize: 18,
      fontWeight: '700',
      backgroundColor: '#ff1111ff',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      textAlign: 'right',
      // writingDirection: 'rtl',
      fontFamily: font,
    } as TextStyle,
    body: {
      fontSize: 12,
      fontWeight: '400',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      textAlign: 'right',
      //  textAlign: 'right',
      //  writingDirection: 'rtl',
      fontFamily: font,
    } as TextStyle,
  },
  layout: {
    container: {
      flex: 1,
      textAlign: 'right',
      
      backgroundColor: '#f6ffdcff',
      marginRight: 10,
      marginLeft: 10,
    },
    row: {
      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    justifyStart: {
      justifyContent: 'flex-end' ,
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    alignStart: {
      alignItems: 'flex-end',
    },
    alignEnd: {
      alignItems:'flex-end',
    },
  },
};
import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';
import sizes from './sizes';

export const defaultTheme = extendTheme({
  styles: {
    global: {
      '*[data-focus]': {
        boxShadow: 'none !important',
      },
    },
  },
  colors: colors,
  sizes,
  space: sizes,
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none !important' },
        _hover: { opacity: '0.8 !important' },
        transition: 'all 0.3s !important',
      },
    },
    Link: { baseStyle: { _focus: { boxShadow: 'none !important' } } },
    Checkbox: {
      baseStyle: {
        control: {
          borderRadius: '0.4rem',
        },
      },
    },
  },
  ...fonts,
});

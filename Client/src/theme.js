/* This theme file can be used to create consistent spacing, colors, and fonts across the app.
   See the `styled-system` theme documentation for more information on the format.

   For more information on how to use the theme file see: https://styled-system.com/theme-specification
*/
import { theme } from '@chakra-ui/core';

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
    },
    fonts: {
        ...theme.fonts,
        body: 'Roboto, sans-serif',
        condensed: `Roboto Condensed, Roboto, sans-serif`,
        heading: 'Roboto, sans-serif',
    },
    letterSpacings: {
        ...theme.letterSpacings,
        widest: '0.09em',
    },
};

export default customTheme;

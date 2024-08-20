import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: `"Nunito", sans-serif`,
  },
  colors: {
    brand: {
      'main': "#3A3A9C", //
      200: "#F7931A", //orange
      300: "#FFFFFF", // white
      400: "#474A67", //text
      // ...
      900: "#1a202c",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F2F4F7",
      200: "#EAECF0",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#667085",
    },
    hover : {
      button : '#ECECFF',
      link: '#D1D1D1'
    },
    main_blue : "#3489C8"

    
  },
  fontSizes: {
    xxs: "14px",
    xs: "16px",
    sm: "22px",
    md: "24px",
    lg: "44px",
    xl: "48px",
    "2xl": "60px",
    "3xl": "90px",
  },

  semanticTokens: {
    colors: {
      error: "red.500",
      text: {
        default: "brand.400",
        _light: "gray.300",
        white: "brand.300",
      },

    },
  },
  breakpoints: {
    base: "0em", // 0px
    xs: '30em',// 480px
    '2xs': '51.25em', //
    sm: "56em", // ~820px. em is a relative unit and is dependant on the font size.
    md: "64em", // ~1070px
    lg: "75em", // ~1190px
    xl: "76em", // ~1280px
    "2xl": "96em", // ~1536px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1050px",
    xl: "1280px",
  },
});

export default customTheme;

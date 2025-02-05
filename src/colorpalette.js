import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// const colorPalette = {
//   cafeNoir: "#16203b",
//   bgDark: "#160d09ff",
//   timberWolf: "#d6e5e3",
//   tiffanyBlue: "#9fd8cb",
//   textDark: "#11255d",
//   textLessDark: "#2a427c",
//   textLight: "#d6e5e3",
//   colorfulHover: "#7cbbae",
// };

const colorPalette = {
  offWhite: "#fdf5e6",
  grey: "#6c757d",
  darkGrey: "#343a40",
  black: "#000000",
  textDark: "#212529",
  textLessDark: "#495057",
  textLight: "#fdf5e6",
  hoverGrey: "#adb5bd",
};

let fonts = {
  header1: "Abril Fatface, serif",
  header2: "Raleway, serif",
  header3: "Raleway, serif",
  body1: "Noto Sans Georgia, sans-serif",
  body2: "Open Sans, serif",
  body3: "Open Sans, serif",
};

let theme = createTheme({
  // palette: {
  //   text: {
  //     light: colorPalette.textLight,
  //     dark: colorPalette.textDark,
  //     colorful: colorPalette.tiffanyBlue,
  //     black: colorPalette.bgDark,
  //     colorfulHover: colorPalette.colorfulHover,
  //     lessDark: colorPalette.textLessDark,
  //   },
  //   primary: {
  //     main: colorPalette.tiffanyBlue,
  //   },
  //   secondary: {
  //     main: colorPalette.textDark,
  //     light: colorPalette.textLight,
  //   },
  //   background: {
  //     paper: colorPalette.textDark,
  //     default: colorPalette.cafeNoir,
  //     nav: colorPalette.textDark,
  //     dark: colorPalette.bgDark,
  //   },
  // },

  palette: {
    text: {
      light: colorPalette.textLight,
      dark: colorPalette.textDark,
      colorful: colorPalette.offWhite,
      black: colorPalette.black,
      colorfulHover: colorPalette.hoverGrey,
      lessDark: colorPalette.textLessDark,
    },
    primary: {
      main: colorPalette.black,
    },
    secondary: {
      main: colorPalette.grey,
      light: colorPalette.textLight,
    },
    background: {
      paper: colorPalette.textDark,
      default: colorPalette.offWhite,
      nav: colorPalette.textDark,
      dark: colorPalette.grey,
    },
  },

  typography: {
    h8: {
      fontFamily: fonts.body1,
    },
    h7: {
      fontFamily: fonts.body1,
    },
    h6: {
      fontFamily: fonts.body1,
    },
    h5: {
      fontFamily: fonts.body2,
    },
    h4: {
      fontFamily: fonts.header2,
    },
    h3: {
      fontFamily: fonts.header2,
    },
    h2: {
      fontFamily: fonts.header2,
    },
    h1: {
      fontFamily: fonts.header2,
    },
    body1: {
      fontFamily: fonts.body1,
    },
    body2: {
      fontFamily: fonts.body2,
    },
    body3: {
      fontFamily: fonts.body3,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

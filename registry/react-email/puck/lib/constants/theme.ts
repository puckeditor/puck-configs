type palette = {
  primary: string;
  secondary: string;
  border: string;
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    primary: string;
    paper: string;
    bento: string;
  };
};

const lightPalette: palette = {
  primary: "rgb(79,70,229)",
  secondary: "rgb(75,85,99)",
  border: "rgb(209,213,219)",
  text: {
    primary: "rgb(17,24,39)",
    secondary: "rgb(75,85,99)",
  },
  background: {
    primary: "rgb(199,210,254)",
    paper: "rgb(255,255,255)",
    bento: "rgb(41,37,36)",
  },
};

const darkPalette: palette = {
  primary: "rgb(124,134,255)",
  secondary: "rgb(209,213,219)",
  border: "rgb(46,42,36)",
  text: {
    primary: "rgb(255,255,255)",
    secondary: "rgb(255,255,255,0.6)",
  },
  background: {
    primary: "rgb(199,210,254)",
    paper: "rgb(16,24,40)",
    bento: "rgb(41,37,36)",
  },
};

const theme = {
  palette: {
    light: lightPalette,
    dark: darkPalette,
  },
} as const;

export default theme;

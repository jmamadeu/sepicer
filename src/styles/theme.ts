import { TextStyle } from "react-native";

enum TypographyName {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  p1 = "p1",
  p2 = "p2",
  s = "s"
}

enum Colors {
  primary = "primary",
  secondary = "secondary",
  mainText = "mainText",
  secondaryText = "secondaryText",
  outline = "outline",
  form = "form",
  white = "white"
}

const fontsFamily = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  bold: "Inter_700Bold"
};

type TypographyType = {
  [x in TypographyName]: TextStyle;
};

type ColorsType = {
  [x in Colors]: string;
};

type FontFamiliesType = {
  [x in keyof typeof fontsFamily]: string;
};

type ThemeProps = {
  typography: TypographyType;
  colors: ColorsType;
  fonts: FontFamiliesType;
};

const colors: ColorsType = {
  primary: "#1FCC79",
  secondary: "#FF6464",
  mainText: "#2E3E5C",
  secondaryText: "#9FA5C0",
  outline: "#D0DBEA",
  form: "#F4F5F7",
  white: "#fff"
};

const typography: TypographyType = {
  h1: {
    fontFamily: fontsFamily.bold,
    fontWeight: "bold",
    fontSize: 22,
    fontStyle: "normal",
    lineHeight: 32,
    letterSpacing: 0.5
  },
  h2: {
    fontFamily: fontsFamily.bold,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0.5,
    fontSize: 17
  },
  h3: {
    fontFamily: fontsFamily.bold,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 25,
    letterSpacing: 0.5,
    fontSize: 15
  },
  p1: {
    fontFamily: fontsFamily.medium,
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0.5,
    fontSize: 17,
    fontWeight: "500"
  },
  p2: {
    fontFamily: fontsFamily.medium,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 0.5
  },
  s: {
    fontFamily: fontsFamily.medium,
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.5
  }
};

export const theme: ThemeProps = {
  colors,
  typography,
  fonts: fontsFamily
};

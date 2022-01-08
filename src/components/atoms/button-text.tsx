import { theme } from "@styles/theme";
import { StyleSheet, Text, TextStyle } from "react-native";

type ButtonTextProps = {
  children: string;
  style?: TextStyle;
};

export const ButtonText = ({ style, children }: ButtonTextProps) => (
  <Text style={[styles.buttonText, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    lineHeight: 18,
    fontStyle: "normal",
    letterSpacing: 0.007,
    fontSize: 15
  }
});

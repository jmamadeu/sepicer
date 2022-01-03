/* eslint-disable react-native/no-unused-styles */
import { theme } from "@styles/theme";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type TypographyProperties = TextProps & {
  children: string;
  variant: "h1" | "h2" | "h3" | "p1" | "p2" | "s";
  style?: TextStyle;
};

export const Typography = ({
  children,
  variant,
  style,
  ...rest
}: TypographyProperties): JSX.Element => {
  return (
    <Text style={[styles[variant], style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    ...theme.typography.h1,
    color: theme.color.mainText
  },
  h2: theme.typography.h2,
  h3: theme.typography.h3,

  p1: {
    ...theme.typography.p1,
    color: theme.color.secondaryText
  },
  p2: theme.typography.p2,

  s: theme.typography.s
});

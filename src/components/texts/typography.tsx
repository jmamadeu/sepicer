/* eslint-disable react-native/no-unused-styles */
import { ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { theme } from "~/styles/theme";

type TypographyProperties = TextProps & {
  children: ReactNode;
  variant: "h1" | "h2" | "h3" | "p1" | "p2" | "s";
  style?: TextStyle;
  color?: string;
};

export const Typography = ({
  children,
  variant,
  style,
  color,
  ...rest
}: TypographyProperties): JSX.Element => {
  return (
    <Text
      style={[
        styles[variant],
        { color: color ?? styles[variant].color },
        style
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    ...theme.typography.h1,
    color: theme.colors.mainText
  },
  h2: theme.typography.h2,
  h3: theme.typography.h3,

  p1: {
    ...theme.typography.p1,
    color: theme.colors.secondaryText
  },
  p2: { ...theme.typography.p2, color: theme.colors.secondaryText },

  s: theme.typography.s
});

/* eslint-disable react-native/no-unused-styles */
import { theme } from "@styles/theme";
import { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle
} from "react-native";

type ButtonProperties = PressableProps & {
  onPress: () => void;
  variant: "primary";
  size?: "default" | "medium" | "small";
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const Button = ({
  onPress,
  variant = "primary",
  children,
  style,
  outlined = false,
  ...rest
}: ButtonProperties): JSX.Element => {
  return (
    <Pressable
      style={[
        styles.common,
        outlined ? stylesOutline[variant] : styles[variant],
        style
      ]}
      accessible={false}
      onPress={onPress}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  common: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32
  },
  primary: {
    backgroundColor: theme.color.primary,
    paddingHorizontal: 15
  }
});

const stylesOutline = StyleSheet.create({
  primary: {
    borderWidth: 2,
    borderColor: theme.color.primary
  }
});

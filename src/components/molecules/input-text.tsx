import { theme } from "@styles/theme";
import { ReactNode } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from "react-native";

type InputProps = TextInputProps & {
  icon?: ReactNode;
  containerStyle?: ViewStyle;
};

export const InputText = ({
  icon,
  containerStyle,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <View style={[styles.inputIcon, containerStyle]}>
      <View style={styles.icon}>{icon}</View>
      <TextInput style={styles.input} accessibilityRole="text" {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputIcon: {
    flexDirection: "row",
    borderWidth: 1,
    width: "100%",
    borderColor: theme.colors.outline,
    borderRadius: 32,
    alignItems: "center"
  },
  icon: {
    marginLeft: 24
  },
  input: {
    height: 56,
    padding: 10,
    fontSize: 15,
    flex: 1
  }
});

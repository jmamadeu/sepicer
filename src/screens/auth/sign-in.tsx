import { Button } from "@atoms/button";
import { Typography } from "@atoms/typography";
import { theme } from "@styles/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SignIn = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <View style={styles.contentContainer}>
      <View style={styles.inputsContentContainer}>
        <Typography variant="h1">Welcome back</Typography>
        <Typography style={styles.secondaryTitle} variant="p2">
          Please enter your account here
        </Typography>

        <TextInput
          placeholder="Email or phone number"
          style={styles.input}
          accessibilityRole="text"
        />
        <TextInput
          placeholder="Password"
          style={[styles.input, styles.firstInput]}
          accessibilityRole="text"
        />

        <Typography variant="p2" style={styles.forgotTextStyle}>
          Forgot password?
        </Typography>
      </View>

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} variant="primary" onPress={() => {}}>
          <Text>Login</Text>
        </Button>

        <Text>Or continue with</Text>

        <Button style={styles.button} variant="primary" onPress={() => {}}>
          <Text>Login</Text>
        </Button>

        <Text>
          Don&apos;t have any account? <Text>Sign Up</Text>
        </Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    marginTop: 107,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 60,
    marginHorizontal: 12
  },
  inputsContentContainer: {
    alignItems: "center"
  },
  secondaryTitle: {
    marginTop: 8,
    marginBottom: 32
  },
  input: {
    height: 56,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 32,
    paddingLeft: 24,
    fontSize: 15,
    borderColor: theme.color.outline
  },
  firstInput: {
    marginTop: 16
  },
  forgotTextStyle: {
    alignSelf: "flex-end",
    marginTop: 24,
    color: theme.color.mainText
  },
  buttonsContainer: {
    alignItems: "center"
  },
  button: {
    width: "100%"
  }
});

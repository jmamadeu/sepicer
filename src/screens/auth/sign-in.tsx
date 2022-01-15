import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleIcon, LockIcon, MessageIcon } from "~/assets";
import { Button, InputText, Typography } from "~/components";
import { theme } from "~/styles/theme";

export const SignIn = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <View style={styles.contentContainer}>
      <View style={styles.inputsContentContainer}>
        <Typography color={theme.colors.mainText} variant="h1">
          Welcome back
        </Typography>
        <Typography
          color={theme.colors.secondaryText}
          style={styles.secondaryTitle}
          variant="p2"
        >
          Please enter your account here
        </Typography>

        <InputText
          placeholder="Email or phone number"
          icon={<MessageIcon color={theme.colors.mainText} />}
        />

        <InputText
          placeholder="Email or phone number"
          containerStyle={styles.inputPasswordStyle}
          icon={<LockIcon color={theme.colors.mainText} />}
        />

        <Typography
          variant="p2"
          color={theme.colors.mainText}
          style={styles.forgotTextStyle}
        >
          Forgot password?
        </Typography>
      </View>

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} variant="primary" onPress={() => {}}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>

        <Typography
          variant="p2"
          color={theme.colors.mainText}
          style={styles.continueTextStyle}
        >
          Or continue with
        </Typography>

        <Button
          style={[styles.button, styles.googleButtonStyles]}
          variant="primary"
          onPress={() => {}}
        >
          <GoogleIcon style={styles.iconStyes} color={theme.colors.white} />
          <Text style={styles.buttonText}>Google</Text>
        </Button>

        <Typography
          variant="p2"
          color={theme.colors.mainText}
          style={styles.googleTextStyle}
        >
          Don&apos;t have any account?{" "}
          <Typography variant="h3" color={theme.colors.primary}>
            Sign Up
          </Typography>
        </Typography>
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
  inputPasswordStyle: {
    marginTop: 16
  },
  forgotTextStyle: {
    alignSelf: "flex-end",
    marginTop: 24
  },
  buttonsContainer: {
    alignItems: "center"
  },
  button: {
    width: "100%"
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 15,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white
  },
  googleButtonStyles: {
    backgroundColor: theme.colors.secondary,
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyes: {
    marginRight: 10
  },
  continueTextStyle: {
    marginVertical: 24
  },
  googleTextStyle: {
    marginTop: 24
  }
});

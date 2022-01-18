import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LockIcon, MessageIcon } from "~/assets";
import { Button, InputText, Typography } from "~/components";
import { theme } from "~/styles/theme";

export const SignUp = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <View style={styles.contentContainer}>
      <View style={styles.inputsContentContainer}>
        <Typography color={theme.colors.mainText} variant="h1">
          Welcome
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
      </View>

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} variant="primary" onPress={() => {}}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Button>
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
  }
});

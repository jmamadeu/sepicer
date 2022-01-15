import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "~/components";
import { SignInScreenNavigationProp } from "~/routes/types";
import { OnboardingMessage } from "~/screens/onboarding/components/message";

export const Onboarding = (): JSX.Element => {
  const { navigate } = useNavigation<SignInScreenNavigationProp>();

  const handleNavigateToSignIn = () => navigate("SignIn");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/onboarding.png")}
        accessibilityIgnoresInvertColors
      />

      <View style={styles.contentContainer}>
        <OnboardingMessage />

        <Button
          style={styles.buttonContainer}
          variant="primary"
          onPress={() => handleNavigateToSignIn()}
        >
          <ButtonText>Get Started</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 70
  },
  image: {
    width: "100%",
    height: 500
  },
  buttonContainer: {
    width: "100%"
  }
});

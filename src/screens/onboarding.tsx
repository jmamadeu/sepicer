import { Button } from "@atoms/button";
import { ButtonText } from "@atoms/button-text";
import { OnboardingMessage } from "@molecules/onboarding-message";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenNavigationProp } from "@routes/types";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Onboarding = (): JSX.Element => {
  const { navigate } = useNavigation<SignInScreenNavigationProp>();

  const handleNavigateToSignIn = () => navigate("SignIn");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/onboarding.png")}
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

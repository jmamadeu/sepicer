import { Button } from "@atoms/button";
import { Typography } from "@atoms/typography";
import { theme } from "@styles/theme";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export const Onboarding = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/onboarding.png")}
        accessibilityIgnoresInvertColors
      />

      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Typography variant="h1" style={styles.headerText}>
            Start Cooking
          </Typography>
          <Typography variant="p1" style={styles.subHeaderText}>
            Let&apos;s join our community
          </Typography>
          <Typography variant="p1">to cook better food!</Typography>
        </View>

        <Button
          style={styles.buttonContainer}
          variant="primary"
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Get started</Text>
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
  content: {
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    marginTop: 48
  },
  subHeaderText: {
    marginTop: 16
  },
  image: {
    width: "100%",
    height: 500
  },
  buttonContainer: {
    width: "100%"
  },
  buttonText: {
    color: theme.color.white,
    fontFamily: theme.font.bold,
    lineHeight: 18,
    fontStyle: "normal",
    letterSpacing: 0.007,
    fontSize: 15
  }
});

import { Typography } from "@atoms/typography";
import { StyleSheet, View } from "react-native";

export const OnboardingMessage = (): JSX.Element => (
  <View style={styles.content}>
    <Typography variant="h1" style={styles.headerText}>
      Start Cooking
    </Typography>
    <Typography variant="p1" style={styles.subHeaderText}>
      Let&apos;s join our community
    </Typography>
    <Typography variant="p1">to cook better food!</Typography>
  </View>
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center"
  },
  headerText: {
    marginTop: 48
  },
  subHeaderText: {
    marginTop: 16
  }
});

import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./src/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world...!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    ...theme.font.h1
  }
});

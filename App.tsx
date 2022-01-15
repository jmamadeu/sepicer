import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RouterContainer } from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaProvider>
        <RouterContainer />
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </>
  );
}

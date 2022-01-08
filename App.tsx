import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter";
import { RouterContainer } from "@routes/index";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

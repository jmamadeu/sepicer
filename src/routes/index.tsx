import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn as SignInScreen } from "@screens/auth/sign-in";
import { Onboarding } from "@screens/onboarding";
import { MainStackParamsList } from "./types";

const Stack = createNativeStackNavigator<MainStackParamsList>();

export function RouterContainer(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

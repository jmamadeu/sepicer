import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamsList } from "~/routes/types";
import { SignIn as SignInScreen, SignUp as SignUpScreen } from "~/screens/auth";
import { Onboarding as OnboardingScreen } from "~/screens/onboarding";

const Stack = createNativeStackNavigator<MainStackParamsList>();

export function RouterContainer(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

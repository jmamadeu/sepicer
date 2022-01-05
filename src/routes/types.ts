import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParamsList = {
  Onboarding: undefined;
  SignIn: undefined;
};

export type SignInProps = NativeStackScreenProps<MainStackParamsList, "SignIn">;

export type SignInScreenNavigationProp = SignInProps["navigation"];
export type SignInScreenRouteProp = SignInProps["route"];

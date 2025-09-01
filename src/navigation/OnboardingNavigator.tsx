import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "./types";
import { OnboardingStartScreen } from "../screens/onboarding/onBoardingStartScreen";
import { OnboardingStep1Screen } from "../screens/onboarding/onBoardingStep1Screen";
import { OnboardingStep2Screen } from "../screens/onboarding/onBoardingStep2Screen";
import { OnboardingStep3Screen } from "../screens/onboarding/onBoardingStep3Screen";

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      initialRouteName="OnboardingStart"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <OnboardingStack.Screen
        name="OnboardingStart"
        component={OnboardingStartScreen}
      />
      <OnboardingStack.Screen
        name="OnboardingStep1"
        component={OnboardingStep1Screen}
      />
      <OnboardingStack.Screen
        name="OnboardingStep2"
        component={OnboardingStep2Screen}
      />
      <OnboardingStack.Screen
        name="OnboardingStep3"
        component={OnboardingStep3Screen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;

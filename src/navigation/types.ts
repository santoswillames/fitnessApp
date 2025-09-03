export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined;
  Map: undefined;
  Workout: { activityId: string };
  Success: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OtpVerification: undefined;
  ResetPassword: undefined;
  ResetPasswordSuccess: undefined;
};

export type OnboardingStackParamList = {
  OnboardingStart: undefined;
  OnboardingStep1: undefined;
  OnboardingStep2: undefined;
  OnboardingStep3: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Schedule: undefined;
  Statistics: undefined;
  Settings: undefined;
};

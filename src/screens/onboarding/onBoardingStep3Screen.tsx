import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { VStack } from "components/ui/vstack";
import { IndicatorStep } from "./components/indicatorStep";
import { Text } from "react-native";
import { Box } from "components/ui/box";
import { GobackButton } from "./components/goBackButton";
import { Button, ButtonText } from "components/ui/button";
import { CustomCheckboxGroup, CustomCheckboxItem } from "./components/customCheckbox";
import { useStatusBar } from "contexts/StatusBarContext";

export function OnboardingStep3Screen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [values, setValues] = useState(["strength"])

  const { setConfig } = useStatusBar();
  
  useFocusEffect(
    useCallback(() => {
      setConfig({
        backgroundColor: "#FDFDFD",
        barStyle: "dark-content",
      });

      return () =>
        setConfig({
          backgroundColor: "transparent",
          barStyle: "default",
        });
    }, [])
  );

  const handleFinish = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Main", params: { screen: "Home" } }],
    });
  };

  return (
    <VStack className="flex-1 bg-[#FDFDFD] items-center justify-between pt-10 pb-12 px-5">
      <Box className="flex-1 items-center w-full">
        <IndicatorStep />
        <Text className="font-montserrat-semibold text-2xl text-[#262135] mt-[38px]">What is your</Text>
        <Text className="font-montserrat-semibold text-2xl text-[#262135] mb-[15px]">acheive?</Text>
        <Text className="font-montserrat-semibold text-[15px] text-[#9B9B9B] text-center w-[289px] mb-[38px]">What you are going to select will effect your workout program</Text>

       <CustomCheckboxGroup
          value={values}
          onChange={(keys) => setValues(keys)}
        >
          <CustomCheckboxItem
            value="strength"
            label="Strength Training for Muscle Gain"
          />
          <CustomCheckboxItem
            value="hiit"
            label="High-Intensity Interval Training for Fat Loss"
          />
          <CustomCheckboxItem
            value="cardio"
            label="Cardiovascular Exercise for Fat Loss"
          />
          <CustomCheckboxItem
            value="functional"
            label="Functional Training for Overall Fitness"
          />
        </CustomCheckboxGroup>
      </Box>

      <Box className="justify-between items-center flex-row w-full">
        <GobackButton />
        <Button variant="solid" className="w-[248px] h-[78px] bg-[#262135] rounded-3xl" onPress={handleFinish}>
          <ButtonText className="font-montserrat-semibold text-2xl text-white">Start Now</ButtonText>
        </Button>
      </Box>
    </VStack>
  );
}



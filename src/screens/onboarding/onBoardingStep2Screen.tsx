import React, { useCallback, useState } from "react";
import { useOnboardingNavigation } from "../../hooks/useTypedNavigation";
import { VStack } from "components/ui/vstack";
import { IndicatorStep } from "./components/indicatorStep";
import { Text } from "react-native";
import UnitSwitch from "screens/onboarding/components/unitSwitch";
import { Box } from "components/ui/box";
import { GobackButton } from "./components/goBackButton";
import { Button, ButtonIcon, ButtonText } from "components/ui/button";
import { ChevronRight } from "lucide-react-native";
import { useStatusBar } from "contexts/StatusBarContext";
import { useFocusEffect } from "@react-navigation/native";

export function OnboardingStep2Screen() {
  const navigation = useOnboardingNavigation();
  const [selectUnit, setSelectUnit] = useState("cm");
  const [height, setHeight] = useState(170);

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

  const handleNextStep = async () => {
    navigation.navigate("OnboardingStep3");
  };

  return (
    <VStack className="flex-1 bg-[#FDFDFD] items-center justify-between pt-10 pb-12 px-5">
      <Box className="flex-1 items-center">
        <IndicatorStep />
        <Text className=" font-montserrat-semibold text-2xl text-[#262135] mt-[38px]">What is your</Text>
        <Text className=" font-montserrat-semibold text-2xl text-[#262135] mb-10">height?</Text>

        <UnitSwitch
          options={["inches", "cm"]}
          initial={selectUnit}
          onChange={(value) => setSelectUnit(value)}
        />

        <Box className="bg-[#D6EBEB] w-[351px] h-[282px] rounded-[44px] mt-10 items-center justify-center">
          <Text className="font-montserrat-medium text-[#262135] text-[81px]">{height}</Text>
          <Text className="font-montserrat-medium text-[#262135] text-sm">{selectUnit}</Text>
        </Box>
      </Box>

      <Box className="justify-between items-center flex-row w-full">
        <GobackButton />
        <Button variant="solid" className="w-[248px] h-[78px] bg-[#262135] rounded-3xl" onPress={handleNextStep}>
          <ButtonText className="font-montserrat-semibold text-2xl text-white mr-[35px]">Next</ButtonText>
          <Box className="flex-row gap-1">
            <ButtonIcon as={ChevronRight} color="#FFFFFF40" size={24} />
            <ButtonIcon as={ChevronRight} color="#FFFFFF80" size={24} />
            <ButtonIcon as={ChevronRight} color="white" size={24} />
          </Box>
        </Button>
      </Box>
    </VStack>
  );
}


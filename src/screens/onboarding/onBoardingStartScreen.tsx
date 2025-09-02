import React from "react";
import { Text, Image } from "react-native";
import { useOnboardingNavigation } from "../../hooks/useTypedNavigation";
import { Button, ButtonText } from "components/ui/button";
import ArrowWelcomeIcon from '../../assets/svgs/arrow-welcome.svg'
import ChartIcon from '../../assets/svgs/chart.svg'
import { Box } from "components/ui/box";
import { Moon } from "lucide-react-native";
import { VStack } from "components/ui/vstack";
import { SlideButton } from "./components/slideButton";

export function OnboardingStartScreen() {
  const navigation = useOnboardingNavigation();

  const handleFinish = async () => {
    navigation.navigate("OnboardingStep1");
  };

  return (
    <VStack className="flex-1 bg-[#262135] relative">
      
      <Box className="w-[289px] mt-[50px] ml-[40px]">
        <Text className="text-white text-[33px] font-montserrat-bold">
          Start your Fitness Journey
        </Text>
        <Text className="text-white font-montserrat-regular mt-5 text-sm">
          Start your fitness journey 
        </Text>
        <Text className="text-white font-montserrat-regular text-sm">
           with our app's guidance and support.
        </Text>
      </Box>

      <Box className="absolute left-[29px] top-[271px]">
        <ArrowWelcomeIcon  />
      </Box>

      <Image
        source={require("../../assets/images/woman.png")} 
        className="absolute right-0 bottom-0 top-[190px] object-contain"
        resizeMode="contain"
      />

      <Box className="absolute bottom-[138px] left-[77px] bg-[#E8E8E8] rounded-[37px] py-4 px-2 w-[165px] h-[204px] items-center gap-3 justify-between">
        
        <Box className=" flex-row justify-between items-center w-full px-4">
          <Box className="items-center justify-center rounded-full bg-white size-[57px]">
            <Moon size={24}/>
          </Box>
          <Box>
            <Text className="text-black font-montserrat-regular text-sm">Drink</Text>
            <Text className="text-black text-base font-montserrat-semibold">150 ml</Text>
          </Box>
        </Box>

        <Box className="mb-4">
          <ChartIcon />
        </Box>
      
      </Box>

   
      <Box className="absolute bottom-10 left-6 right-6">
        <SlideButton />
      </Box>
    </VStack>
  );
}



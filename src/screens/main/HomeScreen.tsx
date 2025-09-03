import { Avatar, AvatarFallbackText, AvatarImage } from "components/ui/avatar";
import { Box } from "components/ui/box";
import { Button, ButtonIcon } from "components/ui/button";
import { HStack } from "components/ui/hstack";
import { VStack } from "components/ui/vstack";
import { ListFilter, Search } from "lucide-react-native";
import React from "react";
import { Text } from "react-native";
import { ChartHome } from "./components/chartHome";
import { TimelineSchedule } from "./components/timelineSchedule";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

export function HomeScreen() {
  const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleActivityStart = (activityId: string) => {
    navigation.push("Workout", { activityId });
  };
      
  return (
    <VStack className="flex-1 bg-[#262135] px-8">
      <HStack className="mt-[41px] items-center justify-between mb-12">
        <Box >
          <Text className="font-montserrat-semibold text-white text-4xl">Hi!,</Text>
          <Text className="font-montserrat-semibold text-white text-4xl">Youssef</Text>
        </Box>
        <Box className="bg-[#FFC9E9] rounded-full w-[153px] h-[72px] p-1 flex-row items-center justify-between">
          <Button className="bg-[#262135] rounded-full h-[66px] w-[66px]">
            <ButtonIcon as={Search} color="white" size={18}/>
          </Button>
          <Avatar className="bg-white h-[66px] w-[66px]">
            <AvatarFallbackText className="font-montserrat-semibold text-[#262135] text-2xl">
              Youssef
            </AvatarFallbackText>
            <AvatarImage source={require("../../assets/images/user_img.png")}/>
          </Avatar>
        </Box>
      </HStack>
      <ChartHome />
      <Box className="mt-10 flex-row items-center justify-between h-20">
        <Box>
          <Text className="font-montserrat-semibold text-white text-3xl">Your</Text>
          <Text className="font-montserrat-semibold text-white text-3xl">Schedule</Text>
        </Box>
        <Button className="bg-[#D6EBEB] rounded-2xl w-14 h-12">
          <ButtonIcon as={ListFilter} color="#262135" size={24}/>
        </Button>
      </Box>
      <Text className="mt-4 mb-4 font-montserrat-regular text-white text-sm">Today’s Activity</Text>
      <TimelineSchedule handleStartActivity={handleActivityStart} />
    </VStack>
  );
}

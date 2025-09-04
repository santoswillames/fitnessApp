import { Box } from "components/ui/box";
import { VStack } from "components/ui/vstack";
import React, { useState } from "react";
import { Text } from "react-native";
import { DateData } from "react-native-calendars";
import { CustomCalendar } from "./components/customCalendar";
import { Button, ButtonIcon, ButtonText } from "components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { ModalSchedule } from "./components/modalSchedule";

export function ScheduleScreen() {
  const initialDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    timestamp: new Date().getTime(),
    dateString: new Date().toISOString().split("T")[0]
  };

  const [daySelected, setDaySelected] = useState<DateData | undefined>(initialDate);

  function handleNextMonth() {}

  function handlePreviousMonth() {}

  return (
    <VStack className="flex-1 bg-[#262135] px-8 pt-[41px]">
      {daySelected && (
        <>
          <Text className="font-montserrat-regular text-sm text-white uppercase">
            {daySelected.dateString === new Date().toISOString().split("T")[0]
              ? "Today is"
              : "Selected day"}
          </Text>

          <Box className="flex-row items-center justify-between">
            <Box>
              <Text className="font-montserrat-semibold text-4xl text-white">
                {daySelected.day +
                  ", " +
                  new Date(daySelected.dateString).toLocaleString("en-US", {
                    month: "long",
                  })}
              </Text>
              <Text className="font-montserrat-semibold text-4xl text-white">
                {daySelected.year}
              </Text>
            </Box>

            <Box className="flex-row items-center">
              <Button className="bg-[#262135] rounded-full p-0" onPress={handlePreviousMonth}>
                <ButtonIcon as={ChevronLeft} color="white" size={26}/>
              </Button>
              <Button className="bg-[#262135] rounded-full p-0" onPress={handleNextMonth}>
                <ButtonIcon as={ChevronRight} color="white" size={26}/>
              </Button>
            </Box>
          </Box>
        </>
      )}

      <CustomCalendar onDayPress={setDaySelected} daySelected={daySelected} />
      <ModalSchedule />
    </VStack>

  );
}

import React, { useState, useRef } from "react";
import { FlatList, Text, ViewToken } from "react-native";
import { Box } from "components/ui/box";
import { VStack } from "components/ui/vstack";
import { Button, ButtonIcon, ButtonText } from "components/ui/button";
import { Pressable } from "components/ui/pressable";
import { HStack } from "components/ui/hstack";
import { Play } from "lucide-react-native";

interface TimelineScheduleProps {
    handleStartActivity: (activityId: string) => void
}

interface Activity {
  id: string;
  title: string;
  description: string;
}

const activities: Activity[] = [
  { id: "1", title: "WarmUp", description: "Run 02 km" },
  { id: "2", title: "Muscle Up", description: "10 reps, 3 sets with 20 sec rest" },
  { id: "3", title: "Push Up", description: "20 reps , 3 sets with 10 sec rest" },
];

export function TimelineSchedule({ handleStartActivity }: TimelineScheduleProps) {
  const [selectedId, setSelectedId] = useState<string>("1");

  // Configura para considerar o item que aparece +50% na tela como "selecionado"
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setSelectedId(viewableItems[0].item.id as string);
      }
    }
  );

  const renderItem = ({ item }: { item: Activity }) => {
    const isSelected = item.id === selectedId;

    return (
      <Box className={`flex-row items-center py-5`}>
        <VStack className="items-center mr-8">
          <Box
            className={`w-3 h-3 rounded-full border-2 ${
              isSelected
                ? "border-[#F5F2B8] bg-[#262135]"
                : "border-0 bg-[#D3E8E8]"
            }`}
          />
          {/*<Box className="w-[2px] h-[58px] bg-[#FFFFFF59]" />*/}
        </VStack>

        <HStack className="flex-1 justify-between items-center">
            <VStack >
            <Text
                className={`font-montserrat-medium ${
                isSelected ? "text-white  text-base" : "text-[#948DA9] text-sm"
                }`}
            >
                {item.title}
            </Text>
            <Text className={`font-montserrat-medium text-[#948DA9] ${
                isSelected ? "text-xs" : "text-[10px]"
                }`}>{item.description}</Text>
            </VStack>

            {isSelected && (
            <Button className="rounded-full bg-[#F5F2B8] w-[106px] h-[55px]" onPress={() => handleStartActivity(item.id)}>
                <ButtonText className="font-montserrat-bold text-base text-[#262135]">Start</ButtonText>
                <ButtonIcon as={Play} size={14} color="#262135" fill="#262135"/>
            </Button>
            )}
        </HStack>
      </Box>
    );
  };

  return (
    <FlatList
    data={activities}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 150 }}
    onViewableItemsChanged={onViewableItemsChanged.current}
    viewabilityConfig={viewabilityConfig.current}
    />
  );
}

// components/ui/rulerSelector.tsx
import React, { useRef, useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { Text } from "react-native";

type RulerSelectorProps = {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  onChange?: (value: number) => void;
};

export function RulerSelector({
  min = 20,
  max = 200,
  step = 1,
  initial = 70,
  onChange,
}: RulerSelectorProps) {
  const [selectedValue, setSelectedValue] = useState(initial);
  const flatListRef = useRef<FlatList>(null);

  const data = Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, i) => min + i * step);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / 40); // cada item tem largura 40
    const value = data[index];
    if (value !== undefined) {
      setSelectedValue(value);
      onChange?.(value);
    }
  };

  return (
    <View className="items-center">
      {/* Valor selecionado */}
      <Text className="font-montserrat-medium text-[#262135] text-[81px]">{selectedValue}</Text>

      {/* Ruler */}
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={40}
        decelerationRate="fast"
        initialScrollIndex={data.indexOf(initial)}
        getItemLayout={(_, index) => ({
          length: 40,
          offset: 40 * index,
          index,
        })}
        onMomentumScrollEnd={handleScroll}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View className="w-10 items-center">
            <View className="h-6 w-[2px] bg-[#262135]" />
            {item % 10 === 0 && (
              <Text className="text-[#262135] text-xs mt-1">{item}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

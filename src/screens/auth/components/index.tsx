import React, { useState, useRef, useEffect } from "react";
import { Animated, Pressable, Text, View } from "react-native";

type UnitSwitchProps = {
  options: string[];
  initial?: string;
  onChange?: (value: string) => void;
};

export default function UnitSwitch({
  options,
  initial,
  onChange,
}: UnitSwitchProps) {
   const [active, setActive] = useState(initial ?? options[0]);

  const activeIndex = options.indexOf(active);
  const translateX = useRef(new Animated.Value(activeIndex)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: activeIndex,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [active]);

  const handlePress = (option: string) => {
    setActive(option);
    onChange?.(option);
  };

  return (
    <View className="w-[210px] h-[54px] p-1 bg-[#FDFDFD] border border-[#D9D9D9] rounded-full flex-row items-center relative overflow-hidden">
   
      <Animated.View
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          backgroundColor: "#262135",
          borderRadius: 9999,
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 105], // metade da largura do switch (ajusta se mudar o tamanho)
              }),
            },
          ],
        }}
      />

      {options.map((option) => (
        <Pressable
            key={option}
            className="flex-1 items-center justify-center"
            onPress={() => handlePress(option)}
        >
            <Text className={`${active === option ? "text-white text-base" : "text-[#D9D9D9] text-base"} font-montserrat-medium`}>
            {option}
            </Text>
        </Pressable>
      ))}
    </View>
  );
}

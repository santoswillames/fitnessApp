import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ChevronRight } from "lucide-react-native";
import { useOnboardingNavigation } from "hooks/useTypedNavigation";

const SLIDE_WIDTH = 354; // largura do botão
const KNOB_SIZE = 52; // tamanho do knob (círculo arrastável)

export function SlideButton() {
  const navigation = useOnboardingNavigation();
  const translateX = useSharedValue(0);

  // gesture handler
  const pan = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = Math.min(
        Math.max(0, e.translationX),
        SLIDE_WIDTH - KNOB_SIZE
      );
    })
    .onEnd(() => {
      if (translateX.value > SLIDE_WIDTH - KNOB_SIZE - 20) {
        runOnJS(navigation.navigate)({ name: 'OnboardingStep1', params: undefined });
      } else {
        translateX.value = withSpring(0);
      }
    });

  // estilo animado para o knob
  const animatedKnobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="items-center " >
      <View
        style={{ width: SLIDE_WIDTH, height: 69, }}
        className="bg-[#0000006E]  rounded-full flex-row items-center relative px-6"
      >
        <Text className="text-white flex-1 text-center font-montserrat-semibold text-[17px]">Lets start</Text>

        <View className="flex-row gap-1 absolute right-4">
            <ChevronRight color="#FFFFFF40" size={24} />
            <ChevronRight color="#FFFFFF80" size={24} />
            <ChevronRight color="white" size={24} />
        </View>

        <GestureDetector gesture={pan}>
          <Animated.View
            style={[styles.knob, animatedKnobStyle]}
            className="bg-white rounded-full items-center justify-center"
          >
            <ChevronRight size={24} color="black" />
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  knob: {
    position: "absolute",
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    left: 11,
  },
});

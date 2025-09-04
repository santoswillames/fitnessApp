import React from "react";
import "../global.css"

import { RootNavigator } from "./navigation/RootNavigator";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBarProvider } from "contexts/StatusBarContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#262135' }}>
      <BottomSheetModalProvider>
        <GluestackUIProvider>
          <StatusBarProvider>
            <RootNavigator />
          </StatusBarProvider>
        </GluestackUIProvider>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default App;

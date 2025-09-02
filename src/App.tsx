import React from "react";
import "../global.css"

import { RootNavigator } from "./navigation/RootNavigator";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBarProvider } from "contexts/StatusBarContext";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#262135' }}>
      <GluestackUIProvider>
        <StatusBarProvider>
          <RootNavigator />
        </StatusBarProvider>
      </GluestackUIProvider>
    </SafeAreaView>
  );
};

export default App;

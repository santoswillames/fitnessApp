// StatusBarContext.tsx
import React, { createContext, useContext, useState } from "react";
import { StatusBar, StatusBarStyle } from "react-native";

type StatusBarConfig = {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
};

type StatusBarContextType = {
  setConfig: (config: StatusBarConfig) => void;
};

const StatusBarContext = createContext<StatusBarContextType | undefined>(undefined);

export const StatusBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<StatusBarConfig>({
    backgroundColor: "transparent",
    barStyle: "default",
  });

  return (
    <StatusBarContext.Provider value={{ setConfig }}>
      <StatusBar
        translucent
        backgroundColor={config.backgroundColor}
        barStyle={config.barStyle}
      />
      {children}
    </StatusBarContext.Provider>
  );
};

export function useStatusBar() {
  const ctx = useContext(StatusBarContext);
  if (!ctx) throw new Error("useStatusBar deve ser usado dentro do StatusBarProvider");
  return ctx;
}

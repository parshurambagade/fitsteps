import React, { createContext, useContext, useState } from "react";
import { Pressable, Text, View } from "react-native";

// Types
interface TabsContextType {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

// Context
const TabsContext = createContext<TabsContextType | undefined>(undefined);

// Hook
const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
};

// Components
const Tabs = ({ defaultValue, children, className }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <View className={`flex-1 ${className}`}>{children}</View>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className }: TabsListProps) => {
  return (
    <View
      className={`w-full flex flex-row justify-between rounded-full border bg-custom-bgCard 
        ${className} `}
    >
      {children}
    </View>
  );
};

const TabTrigger = ({ value, children, className }: TabTriggerProps) => {
  const { selectedTab, setSelectedTab } = useTabsContext();
  const isSelected = selectedTab === value;

  return (
    <Pressable
      onPress={() => setSelectedTab(value)}
      className={`flex-1 py-3 px-6 rounded-full 
        ${isSelected && "bg-custom-primary"} 
     ${className}`}
    >
      <Text
        className={`
          text-center 
          ${isSelected ? "text-white" : "text-gray-400"}`}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const TabContent = ({ value, children, className }: TabContentProps) => {
  const { selectedTab } = useTabsContext();

  if (selectedTab !== value) return null;

  return <View className={`mt-6 ${className}`}>{children}</View>;
};

// Export components
Tabs.List = TabsList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs;

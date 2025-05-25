import HistoryTabs from "@/components/history/HistoryTabs";
import React from "react";
import { View } from "react-native";

export default function History() {
  return (
    <View className={`flex-1 justify-center`}>
      <HistoryTabs />
    </View>
  );
}

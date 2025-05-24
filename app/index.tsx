import { Text } from "@/app/(components)/ui/text";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View className={`flex-1 justify-center`}>
      <Text className="text-custom-primary text-center my-20">FitSteps</Text>
    </View>
  );
}

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const TodaysActivityCard = () => {
  return (
    <View className="p-6 border rounded-xl bg-custom-bgCard">
      <Text className="text-custom-textSecondary [font-family:Inter] text-xl font-medium leading-[normal] mb-6">
        Today&apos;s Activity
      </Text>
      <View className="flex flex-row justify-between gap-4 items-center">
        <ActivityCard
          label="Distance"
          value={1.8}
          unit="km"
          icon={{ name: "map", color: "#2F80ED", bgColor: "#133460" }}
        />
        <ActivityCard
          label="Calories"
          value={124}
          unit="kcal"
          icon={{ name: "flame", color: "#2FED7BFF", bgColor: "#104927FF" }}
        />
      </View>
    </View>
  );
};

interface IActivityCard {
  label: string;
  icon: {
    name: keyof typeof Ionicons.glyphMap;
    color: string;
    bgColor: string;
  };
  value: number;
  unit: string;
}

const ActivityCard = ({ label, icon, value, unit }: IActivityCard) => {
  return (
    <View className="border rounded-xl p-6 gap-4 border-custom-bgCard bg-[#161C2B]">
      <View className="flex flex-row items-center gap-2">
        <Ionicons
          name={icon.name}
          size={20}
          color={icon.color}
          className={`rounded-full w-max flex items-center justify-center self-center p-2`}
          style={{ backgroundColor: icon.bgColor }}
        />
        <Text className="text-custom-textSecondary [font-family:Inter] text-base font-medium leading-[normal] ">
          {label}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-center gap-1">
        <Text className="text-custom-textPrimary text-2xl font-bold ">
          {value}
        </Text>
        <Text className="text-custom-textSecondary text-lg">{unit}</Text>
      </View>
    </View>
  );
};
export default TodaysActivityCard;

import TodaysActivityCard from "@/components/Home/TodaysActivityCard";
import WeekStatusCard from "@/components/Home/WeekStatusCard";
import { Text } from "@/components/ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";
import CircularProgressContainer from "../components/Home/CircularProgressContainer";

export default function Index() {
  const todaysSteps = 3500;
  const dailyGoal = 7500;
  return (
    <View className={`flex-1 justify-start gap-8 p-4`}>
      <CircularProgressContainer
        percentage={(todaysSteps * 100) / dailyGoal}
        radius={120}
        className="w-60 h-60 object-contain"
      >
        <StepCount todaysSteps={todaysSteps} dailyGoal={dailyGoal} />
      </CircularProgressContainer>
      <WeekStatusCard />
      <TodaysActivityCard />
    </View>
  );
}

interface IStepCount {
  todaysSteps: number;
  dailyGoal: number;
}

const StepCount = ({ todaysSteps, dailyGoal }: IStepCount) => {
  return (
    <View className="items-center">
      <View className="flex-row items-center justify-center">
        <Ionicons name="walk" size={30} color={"#2F80ED"} />
        <Text className="text-custom-textSecondary">Steps today</Text>
      </View>
      <Text className="  [font-family:Inter] text-5xl  font-semibold leading-[normal] text-custom-primary  mt-2">
        {todaysSteps}
      </Text>
      <Text className="text-gray-600">Daily goal: {dailyGoal}</Text>
    </View>
  );
};

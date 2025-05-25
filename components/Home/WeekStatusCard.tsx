import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const WeekStatusCard = () => {
  const weekDays = [
    { id: 1, day: "Sun", isGoalComplete: false },
    { id: 2, day: "Mon", isGoalComplete: false },
    { id: 3, day: "Tue", isGoalComplete: true },
    { id: 4, day: "Wed", isGoalComplete: false },
    { id: 5, day: "Thu", isGoalComplete: true },
    { id: 6, day: "Fri", isGoalComplete: false },
    { id: 7, day: "Sat", isGoalComplete: false },
  ];

  return (
    <View className="bg-custom-bgCard border rounded-xl p-4 flex-row justify-between items-center">
      {weekDays.map((day) => (
        <DayCard key={day.id} day={day} />
      ))}
    </View>
  );
};

interface IDayCard {
  day: {
    id: number;
    day: string;
    isGoalComplete: boolean;
  };
}
const DayCard = ({ day }: IDayCard) => {
  return (
    <View className="flex gap-1">
      <Text className="text-custom-textSecondary">{day.day}</Text>
      <Ionicons
        name={day.isGoalComplete ? "checkmark-circle" : "remove-circle-outline"}
        color={"#2F80ED"}
        className=""
        size={24}
      />
    </View>
  );
};

export default WeekStatusCard;

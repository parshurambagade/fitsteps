import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const StreakContent = () => {
  const mockRecords: IDailyRecordCard[] = [
    { date: "May 22", distance: 3.6, steps: 4576 },
    { date: "May 21", distance: 4.2, steps: 5230 },
    { date: "May 20", distance: 2.8, steps: 3450 },
    { date: "May 19", distance: 5.1, steps: 6380 },
    { date: "May 18", distance: 3.9, steps: 4890 },
    { date: "May 17", distance: 4.5, steps: 5620 },
    { date: "May 16", distance: 3.3, steps: 4120 },
    { date: "May 15", distance: 4.8, steps: 5980 },
    { date: "May 14", distance: 3.1, steps: 3890 },
    { date: "May 13", distance: 4.4, steps: 5470 },
  ];
  return (
    <View className="gap-6">
      <View className="border rounded-xl bg-custom-bgCard p-7 items-center gap-4">
        <Image
          source={require("@/assets/images/flame-icon.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text className="text-custom-textPrimary [font-family:Inter] text-3xl font-medium leading-[normal] mb-2">
          6-Day Streak
        </Text>
        <Text className="text-custom-textSecondary text-lg">
          Your streak information goes here.
        </Text>
        <View className="border border-custom-bgLight rounded-xl bg-custom-bgLight p-4 w-full items-center">
          <Text className="text-custom-textSecondary text-lg">
            🏆 Longest Streak: 12 days
          </Text>
        </View>
      </View>

      <View className="flex gap-4">
        <Text className="text-custom-textPrimary [font-family:Inter] text-[15.9px] font-normal leading-[normal]">
          Daily Progress
        </Text>
        <View className={`h-96 pb-12`}>
          <FlatList
            data={mockRecords}
            renderItem={({ item }) => <DailyRecordCard {...item} />}
            keyExtractor={(item) => item.date}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            contentContainerStyle={{ gap: 8 }}
          />
        </View>
      </View>
    </View>
  );
};

interface IDailyRecordCard {
  date: string;
  distance: number;
  steps: number;
}
const DailyRecordCard = ({ date, distance, steps }: IDailyRecordCard) => {
  return (
    <View className="flex flex-row  w-full  bg-custom-bgCard border p-5 border-custom-bgLight justify-between gap-4 items-center  rounded-xl ">
      <View className="flex flex-row  gap-3  ">
        <Image
          source={require("@/assets/images/circle-check.png")}
          className="h-12 w-12"
          resizeMode="contain"
        />
        <View className="flex gap-1">
          <Text className="text-lg text-custom-textPrimary">{date}</Text>
          <Text className="text-custom-textSecondary">{distance}km</Text>
        </View>
      </View>
      <View className="flex gap-1">
        <Text className="text-lg text-custom-textPrimary">
          {steps.toLocaleString()}
        </Text>
        <Text className="text-custom-textSecondary">steps</Text>
      </View>
    </View>
  );
};

export default StreakContent;

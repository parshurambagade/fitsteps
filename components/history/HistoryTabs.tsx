import Tabs from "@/components/common/Tabs";
import React from "react";
import { View } from "react-native";
import ChallengesContent from "./ChallengesContent";
import RewardsContent from "./RewardsContent";
import StreakContent from "./StreakContent";

const HistoryTabs = () => {
  return (
    <View className="flex-1 justify-center py-4">
      <Tabs defaultValue="streak" className="p-4">
        <Tabs.List>
          <Tabs.Trigger value="streak">Streak</Tabs.Trigger>
          <Tabs.Trigger value="rewards">Rewards</Tabs.Trigger>
          <Tabs.Trigger value="challenges">Challenges</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="streak">
          <StreakContent />
        </Tabs.Content>

        <Tabs.Content value="rewards">
          <RewardsContent />
        </Tabs.Content>

        <Tabs.Content value="challenges">
          <ChallengesContent />
        </Tabs.Content>
      </Tabs>
    </View>
  );
};

export default HistoryTabs;

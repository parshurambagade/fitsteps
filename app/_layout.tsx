import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import "@/global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Badge, BadgeIcon, BadgeText } from "../components/ui/badge";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import { FireIcon } from "../components/ui/icon";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2F80ED",
          tabBarStyle: {
            position: "absolute",
            flex: 1,
            paddingTop: 8,
          },
          headerStyle: {
            backgroundColor: "#0A0E23",
          },

          headerShown: true,
          headerLeft: () => (
            <View className="px-8 justify-center">
              <Avatar size="md">
                <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                />
              </Avatar>
            </View>
          ),
          headerRight: () => (
            <View className="px-8 flex-row gap-2">
              <Badge
                size="md"
                variant="solid"
                action="muted"
                className="bg-custom-primary text-white gap-1.5 rounded-md"
              >
                <BadgeIcon as={FireIcon} className="ml-2 text-warning-700 " />
                <BadgeText className="text-white"> 6 days</BadgeText>
              </Badge>
              <Ionicons
                name="notifications"
                size={24}
                color={"lightgray"}
                className="text-lg text-white"
              />
            </View>
          ),
          headerTintColor: "#fff",
          // header: () => <MainHeader />,
          sceneStyle: {
            backgroundColor: "#0A0E23",
          },
          tabBarBackground: () => (
            <BlurView
              experimentalBlurMethod={"dimezisBlurView"}
              intensity={25}
              className="bg-custom-bgCard overflow-hidden"
              style={{ ...StyleSheet.absoluteFillObject }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "podium-sharp" : "podium-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="challenges"
          options={{
            title: "Challenges",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "trophy-sharp" : "trophy-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}

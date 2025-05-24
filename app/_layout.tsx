import "@/global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
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
            title: "Home",
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

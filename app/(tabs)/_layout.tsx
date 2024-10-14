import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#031D44",
        tabBarInactiveTintColor: "#D8E1FF",
        tabBarStyle: {
          backgroundColor: "#1E3888",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="rankings"
        options={{
          headerShown: false,
          title: "Rankings",
        }}
      />
      <Tabs.Screen
        name="college"
        options={{
          headerShown: false,
          title: "College",
        }}
      />
    </Tabs>
  );
}

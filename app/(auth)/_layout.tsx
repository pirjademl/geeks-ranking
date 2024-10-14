import { Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="sign-in"
        options={{
          title: "Sign-in",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="sign-up"
        options={{ title: "Sign-up", headerShown: false }}
      />
    </Tabs>
  );
}

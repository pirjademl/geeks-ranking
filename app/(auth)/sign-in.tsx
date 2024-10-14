import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SignIn() {
  return (
    <>
      <SafeAreaView className="bg-primary h-full w-full">
        <View>
          <Text>Sign in </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

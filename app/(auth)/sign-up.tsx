import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
export default function SignUp() {
    return (
        <>
            <SafeAreaView className="bg-primary w-full h-full px-2 ">
                <View className="">
                    <Text className="text-2xl text-secondary mt-3 text-center text-[#333]">
                        Signup to geeks ranking
                    </Text>
                </View>
                <View>
                    <View className="">
                        <Label title="firstname" />
                        <Input placeholderText="JOHN" />
                    </View>
                    <View className="">
                        <Label title="lastname" />
                        <Input placeholderText="DOE" />
                    </View>
                    <View className="">
                        <Label title="email" />
                        <Input placeholderText="JOHN.DOE@gmail.com" />
                    </View>
                    <View className="">
                        <Label title="password" />
                        <Input placeholderText="*******" />
                    </View>
                    <Button title="sign up" textStyle="" containerStyles="" />
                </View>
            </SafeAreaView>
        </>
    );
}

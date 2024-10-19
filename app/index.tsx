import { Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Image } from "react-native";
import { Heading } from "../constants";
import { logo } from "../constants";
import { router } from "expo-router";
import { Label } from "../components/label";
import { Button } from "../components/button";

export default function Home() {
    const [loaded, error] = useFonts({
        nunito: require("../assets/static/fonts/Nunito-Black.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    if (!loaded && !error) {
        return null;
    }
    return (
        <SafeAreaView
            style={{ fontFamily: "nunito", fontSize: 28 }}
            className=" font-nunito bg-primary w-full h-full flex items-center justify-center px-2"
        >
            <View className="mt-8 mb-8">
                <Image
                    source={logo}
                    className="h-[20px] w-[30px]"
                    resizeMode="center"
                />
            </View>
            <StatusBar style="light" />
            <View className="flex flex-col gap-3 items-center justify-center">
                <Text className="text-secondary text-xl font-semibold uppercase">
                    Welcome to geeks ranking
                </Text>
                <Text className="text-secondary ">
                    See your ranking and your peers in your college{" "}
                </Text>
            </View>
            <View className="">
                <Image
                    source={Heading}
                    className="h-[200px] w-[300px]"
                    resizeMode="contain"
                />
            </View>
            <View className="px-2 w-full">
                <Button
                    title="get started"
                    containerStyles="w-full"
                    textStyle="uppercase text-center text-sm font-bold "
                    clickHandler={() => router.push("/sign-in")}
                />
            </View>
        </SafeAreaView>
    );
}

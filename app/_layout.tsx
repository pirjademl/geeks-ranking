import { isLoaded, useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
SplashScreen.preventAutoHideAsync();
export default function Layout() {
    const [loaded, error] = useFonts({
        "Nunito-Black": require("../assets/static/fonts/Nunito-Black.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (loaded) {
            console.log("fonts loaded");
            SplashScreen.hideAsync();
        }
    }, [isLoaded, error]);
    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}

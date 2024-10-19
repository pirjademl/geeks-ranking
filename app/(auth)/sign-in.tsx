import { View, Text, Alert } from "react-native";
import { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ILogin } from "../../types";

export default function SignIn() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [user, setUser] = useState<ILogin>({ email: "", password: "" });

    const handleLogin = useCallback(() => {
        if (!user.email || !user.password) {
            Alert.alert("username or password cannot be empty");
            return;
        }
        setIsLoading(true);
        setIsDisabled(true);
    }, [isLoading, isDisabled]);
    return (
        <>
            <SafeAreaView className="bg-primary h-full w-full justify-center px-3 flex flex-col space-y-2">
                <View className="items-center mt-2">
                    <Text className="text-secondary font-semibold text-2xl mt-3">
                        Welcome back
                    </Text>
                </View>
                <View className="mt-3 ">
                    <Label title="enter your email" />
                    <Input
                        placeholderText="JOHN.DOE@work.com"
                        onChangeHandler={(text: string) =>
                            setUser({ ...user, email: text })
                        }
                        value={user.email}
                    />
                </View>
                <View className="mt-3 ">
                    <Label title="enter your password" />
                    <Input
                        placeholderText="*******"
                        onChangeHandler={(text: string) =>
                            setUser({ ...user, password: text })
                        }
                        value={user.password}
                    />
                </View>
                <View>
                    <Button
                        title="sign in"
                        isLoading={isLoading}
                        textStyle="text-center text-sm font-bold uppercase"
                        containerStyles="mt-4 flex flex-row items-center justify-center space-x-2 row-reverse "
                        disabled={isDisabled}
                        clickHandler={handleLogin}
                    ></Button>
                </View>
            </SafeAreaView>
        </>
    );
}

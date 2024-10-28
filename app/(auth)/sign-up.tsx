import { View, Text, Alert, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useCallback, useEffect, useState } from "react";
import { ICollege, ISignUp } from "../../types";
import AutocompleteInput from "react-native-autocomplete-input";

//@TODO make a better auto complete input
export default function SignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setdata] = useState<ICollege>([]);
    const [text, setText] = useState("");

    const [isDisabled, setIsDisabled] = useState(false);
    const [userInfo, setuserInfo] = useState<ISignUp>({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        college: "",
    });

    const fetchData = async () => {
        setIsLoading(true); // Start loading
        try {
            const response = await fetch(
                `https://utilapi.geeksforgeeks.org/api/institutes/${text}/institute/?source=gfg-institute-page`,
            );

            // Check if the response content type is JSON
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                console.log(data);
                setdata(data);
            } else {
                const text = await response.text();
                console.log("Received non-JSON response:", text);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        } finally {
            setIsLoading(false); // End loading
        }
    };

    const handlePress = useCallback(() => {
        console.log(userInfo);
        if (
            !userInfo.email ||
            !userInfo.password ||
            !userInfo.firstname ||
            !userInfo.lastname
        ) {
            Alert.alert("All fields are mandatory");
            return;
        }
        console.log(userInfo);
        setIsLoading(!isLoading);
        setIsDisabled(true);
    }, [isLoading]);

    useEffect(() => {
        fetchData();
    }, [text]);
    return (
        <>
            <SafeAreaView className="bg-primary  w-full h-full px-2 flex flex-col  ">
                <ScrollView>
                    <View className="">
                        <Text className="text-2xl text-secondary  mt-3 text-center p-3 ">
                            Signup to geeks ranking
                        </Text>
                    </View>
                    <View>
                        <View className="">
                            <Label title="firstname" />
                            <Input
                                placeholderText="JOHN"
                                isPassword={false}
                                value={userInfo.firstname}
                                onChangeHandler={(text) =>
                                    setuserInfo({
                                        ...userInfo,
                                        firstname: text,
                                    })
                                }
                            />
                        </View>
                        <View className="">
                            <Label title="lastname" />
                            <Input
                                placeholderText="DOE"
                                isPassword={false}
                                value={userInfo.lastname}
                                onChangeHandler={(text) =>
                                    setuserInfo({ ...userInfo, lastname: text })
                                }
                            />
                        </View>
                        <View className="">
                            <Label title="email" />
                            <Input
                                isPassword={false}
                                value={userInfo.email}
                                placeholderText="JOHN.works@domain.com"
                                onChangeHandler={(text) =>
                                    setuserInfo({ ...userInfo, email: text })
                                }
                            />
                        </View>
                        <View className="">
                            <Label title="password" />
                            <Input
                                placeholderText="*******"
                                isPassword={true}
                                value={userInfo.password}
                                onChangeHandler={(text) =>
                                    setuserInfo({ ...userInfo, password: text })
                                }
                            />
                        </View>

                        <View className="mt-2">
                            <AutocompleteInput
                                className="bg-primary px-3 font-bold text-sm  rounded-sm mt-2 text-secondary font-bold text-sm"
                                data={data}
                                onChangeText={(text) => setText(text)}
                                value={text}
                                scrollEnabled
                                flatListProps={{
                                    keyExtractor: (_, idx) => idx.toString(),
                                    scrollEnabled: true,
                                    className: "h-10",
                                    renderItem: ({ item }) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setText(item.name);
                                                setuserInfo({
                                                    ...userInfo,
                                                    college: item.slug,
                                                });
                                                setdata([]);
                                            }}
                                            className="px-2 py-1 bg-primary "
                                        >
                                            <Text className="text-secondary font-thin  text-xs">
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    ),
                                }}
                            />
                        </View>
                        <Button
                            title="sign up"
                            textStyle="font-bold text-sm text-center uppercase"
                            containerStyles="mt-2"
                            clickHandler={handlePress}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

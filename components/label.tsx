import { FC } from "react";
import { View, Text } from "react-native";

interface LabelProps {
    title: String;
}
const Label: FC<LabelProps> = ({ title }) => {
    return (
        <View className="">
            <Text className="text-secondary capitalize  text-lg">{title}</Text>
        </View>
    );
};
export { Label };

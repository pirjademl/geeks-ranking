import { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
interface ButtonProps {
    title: string;
    clickHandler?: () => void;
    containerStyles?: string;
    textStyle?: string;
}
const Button: FC<ButtonProps> = ({
    title,
    clickHandler,
    containerStyles,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            onPress={clickHandler}
            className={`bg-secondary px-3 py-4 rounded-md w-full   ${containerStyles}`}
        >
            <Text className={`text-primary ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    );
};
export { Button };

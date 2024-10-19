import { Animated, Easing, Text } from "react-native";
import { FC } from "react";
import { useRef, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
interface ButtonProps {
    title: string;
    clickHandler: () => void;
    containerStyles: string;
    textStyle: string;
    isLoading: boolean;
    disabled: boolean;
}
const Button: FC<ButtonProps> = ({
    title,
    clickHandler,
    containerStyles,
    textStyle,
    disabled,
    isLoading,
}) => {
    const rotateValue = useRef(new Animated.Value(0)).current;

    const startRotation = () => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    };

    // Start rotation when isLoading is true
    useEffect(() => {
        if (isLoading) {
            startRotation();
        } else {
            rotateValue.stopAnimation();
        }
    }, [isLoading]);

    // Interpolate the rotation value to rotate 360 degrees
    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <TouchableOpacity
            onPress={clickHandler}
            disabled={disabled}
            className={`px-3 rounded-sm py-1 bg-secondary ${containerStyles} ${disabled ? "bg-gray-500/40" : ""}`}
        >
            {isLoading ? (
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <FontAwesome
                        name="hourglass-1"
                        size={20}
                        color="secondary"
                        className="text-secondary"
                    />
                </Animated.View>
            ) : (
                <Text className={`text-primary ${textStyle}`}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};
export { Button };

import { FC } from "react";
import { TextInput } from "react-native";
interface InputProps {
    placeholderText: string;
    isPassword?: boolean;
    value: string;
    onChangeHandler: (arg0: string) => void;
}

const Input: FC<InputProps> = ({
    placeholderText,
    isPassword = false,
    onChangeHandler,
    value,
}) => {
    return (
        <TextInput
            className="bg-primary border border-border px-3 py-1 rounded-sm mt-2 text-secondary font-bold text-sm"
            placeholderTextColor="#444"
            placeholder={placeholderText}
            secureTextEntry={isPassword}
            value={value}
            onChangeText={onChangeHandler}
        />
    );
};
Input.displayName = "InputField";

export { Input };

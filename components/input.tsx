import { FC } from "react";
import { TextInput } from "react-native";
interface InputProps {
  placeholderText: string;
}

const Input: FC<InputProps> = ({ placeholderText }) => {
  return (
    <TextInput
      className="bg-primary border border-border px-3 py-1 rounded-sm mt-2 text-secondary"
      placeholderTextColor="#444"
      placeholder={placeholderText}
    />
  );
};
export { Input };

import { Input } from "antd";
import { InputProps } from "../types/types";

function InputComponent ({ placeholder, width, onChange, value }: InputProps) {
    return (
        <Input value={value} placeholder={placeholder} style={{ width: width }} onChange={(e) => onChange(e.target.value)} />
    )
}

export default InputComponent
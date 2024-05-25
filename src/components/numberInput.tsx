import { InputNumber, Select } from "antd";
import { NumberInputProps } from "../types/types";
const { Option } = Select;

function NumberInputComponent ({ onChange, value }: NumberInputProps) {
    return (
      <InputNumber value={value} onChange={(currentValue) => onChange(currentValue)} defaultValue={0} style={{ width: 60 }}/>
    )
}

export default NumberInputComponent
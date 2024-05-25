import { ButtonProps } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface ButtonParams extends ButtonProps {
    children: React.ReactNode,
    type: "link" | "text" | "default" | "primary" | "dashed" | undefined,
    size: SizeType,
    htmlType?: "button" | "submit" | "reset" | undefined
}

export interface TableProps {
    columns: Object[],
    dataSource: Object[]
}

export interface InputProps {
    placeholder: string,
    width: string;
    onChange: any;
    value: any;
}

export interface ModalProps {
    handleModalOk: any,
    handleModalCancel: any,
    isModalOpen: boolean;
    setEstimate: any;
    setItem: any;
    item: string;
    estimate: number
}

export interface Item {
    item: string;
    estimate: number;
    key: string;
}

export interface NumberInputProps {
    onChange: any;
    value: number;
}
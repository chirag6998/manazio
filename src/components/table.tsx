import { Table } from "antd";
import { TableProps } from "../types/types";

function TableComponent ({ columns, dataSource }: TableProps) {
    return (
        <Table columns={columns} dataSource={dataSource} pagination={false}/>
    )
}

export default TableComponent;
import { Col, Modal, Row } from "antd";
import InputComponent from "./input";
import { ModalProps } from "../types/types";

function ModalComponent ({ handleModalOk, handleModalCancel, isModalOpen, item, estimate, setEstimate, setItem }: ModalProps) {

    return (
        <Modal title="Add new Item" onOk={handleModalOk} onCancel={handleModalCancel} open={isModalOpen} >
            <Row>
                <Col offset={6}>
                    <InputComponent value={item} placeholder="item" width="200px" onChange={setItem} />
                </Col>
            </Row>
            <Row>
                <Col offset={6} className="mt-2">
                <InputComponent value={estimate} placeholder="Estimate" width="200px" onChange={setEstimate} />
                </Col>
            </Row>
        </Modal>
    )
}

export default ModalComponent;
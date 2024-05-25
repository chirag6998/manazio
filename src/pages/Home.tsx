import { Col, Row } from "antd";
import Navbar from "../components/navbar";
import ButtonComponent from "../components/button";
import TableComponent from "../components/table";
import NumberInputComponent from "../components/numberInput";
import ModalComponent from "../components/modal";
import { useState } from "react";
import { Item } from "../types/types";

function Home() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [item, setItem] = useState<string>("");
  const [estimate, setEstimate] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);
  const [lap, setLap] = useState<number>(0);
      
      const columns = [
        {
          title: 'Items',
          dataIndex: 'item',
          key: 'item',
        },
        {
          title: 'Estimate(min)',
          dataIndex: 'estimate',
          key: 'estimate',
        }
      ];

    const handleAddTask = () => {
      setIsModalOpen(true);
    }

    const handleModalOk = () => {
      const itemsCopy = [...items];
      itemsCopy.push({ item, estimate, key: item });
      setItems(itemsCopy);
      setIsModalOpen(false);
      setItem("");
      setEstimate(0);
    }

    const handleModalCancel = () => {
      setIsModalOpen(false);
      setItem("");
      setEstimate(0);
    }

    const handleItemInput = (value: string) => {
      setItem(value);
    }

    const handleEstimateInput = (value: string) => {
      setEstimate(parseInt(value));
    }

    const handleLapChange = (value: number) => {
      setLap(value);
    }

    const resetData = () => {
      setItems([]);
      setLap(0);
    }

    let totalCount = 0;
    for (let item of items) {
      totalCount = totalCount + item.estimate;
    }

    return (
      <div>
        <Navbar />
        <Row className="flex items-center justify-center mt-10">
            <Col lg={{ span: 6, offset: 10 }}>
                <ButtonComponent type="primary" size="small" ghost onClick={handleAddTask}>Add Task</ButtonComponent>
                <ButtonComponent type="primary" size="small" ghost className="ml-2">Save</ButtonComponent>
                <ButtonComponent danger ghost type="primary" size="small" className="ml-2" onClick={resetData}>Reset</ButtonComponent>
            </Col>
        </Row>
        <Row className="mt-10">
            <Col xs={{offset: 2, span: 20 }} lg={{offset: 8, span:8 }}>
                <TableComponent columns={columns} dataSource={items}/>
            </Col>
        </Row>
        <Row style={{ "marginTop": "80px" }} className="font-bold">
            <Col lg={{offset: 10, span:5 }} xs={{offset: 5, span:10 }}>
                Total: {totalCount}
            </Col>
        </Row>
        <Row className="font-bold" style={{ "marginTop": "20px" }}>
            <Col lg={{offset: 8, span:5 }} xs={{offset: 4, span:8 }} className="flex items-center justify-center">
                Time Elapsed: {lap*30}
            </Col>
            <Col lg={{span:5 }} xs={{offset: 2, span:8 }}>
              Laps: <NumberInputComponent onChange={handleLapChange} value={lap}/>
            </Col>
        </Row>
        <Row>
          <ModalComponent handleModalCancel={handleModalCancel} handleModalOk={handleModalOk} isModalOpen={isModalOpen} setItem={handleItemInput} setEstimate={handleEstimateInput} estimate={estimate} item={item}/>
        </Row>
      </div>
    );
}

export default Home;
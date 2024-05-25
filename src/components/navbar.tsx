import { Col, Row } from "antd";

function Navbar () {
    return (
        <Row className="bg-slate-600 text-white h-12 flex items-center justify-center">
            <Col span={5} offset={4} className="text-xl font-bold">Manazio</Col>
        </Row>
    )
}

export default Navbar;
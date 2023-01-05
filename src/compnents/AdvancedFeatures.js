import { Col, Row } from "react-bootstrap";
import Div from "./Div";


const AdvancedFeatures = (props) => {
    const { style, title, sub_title, desc, children } = props;
    return (
        <Row style={style} className="mt-5">
            <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center mt-4">
                { children }
            </Col>
            <Col lg={6} md={6} sm={12} className="d-flex align-items-center mt-4">
                <Div>
                    <h3 className="text-white"><b>{ title }</b></h3>
                    <h4 className="text-orange"><b>{ sub_title }</b></h4>
                    <h6 className="text-gray mt-4">{ desc }</h6>
                </Div>
            </Col>
        </Row>
    )
}

export default AdvancedFeatures;
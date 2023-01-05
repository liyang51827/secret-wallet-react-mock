import { Col } from "react-bootstrap"
import Div from "./Div"

const TeamCard = (props) => {
    const { name, job, desc, avatar } = props;
    return (
        <Col lg={4} md={4} sm={12} style={{ height: "100%" }}>
            <Div className="team-card d-flex align-items-center flex-column">
                <img src={avatar} alt="" width="150" height="150" />
                <Div>
                    <h4 className="text-white mt-4"><b>{ name }</b></h4>
                    <h5 className="border-bottom-2 py-2 text-gray">{ job }</h5>
                    <p className="text-white mt-4">{ desc }</p>
                </Div>
            </Div>
        </Col>
    )
}
export default TeamCard;
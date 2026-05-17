import { Col } from "react-bootstrap";

export const ProjectsCard =({ title, description}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                
                <div className="proj-txt">
                    <h6>{title}</h6>
                    <span>{description}</span>
                </div>

            </div>
        </Col>
    )
}
import { Col } from "react-bootstrap";

export const ProjectsCard =({ title, description}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>

            </div>
        </Col>
    )
}
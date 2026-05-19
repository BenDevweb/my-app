import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl }) => {
    return (
        <Col xs={12} sm={6} lg={4}>
            <div className="proj-imgbx">

                <img
                    src={imgUrl}
                    alt={title}
                    className="project-image"
                />

                <div className="proj-overlay">
                    <div className="proj-txtx">
                        <h6>{title}</h6>
                        <span>{description}</span>
                    </div>
                </div>

            </div>
        </Col>
    )
}
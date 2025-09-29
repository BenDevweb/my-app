import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
    const projects = [
        {
            title: "Business startup",
            description: "Design & development",
            
        },

         {
            title: "Business startup",
            description: "Design & development",
            
        },

         {
            title: "Business startup",
            description: "Design & development",
            
        },

         {
            title: "Business startup",
            description: "Design & development",
            
        },

         {
            title: "Business startup",
            description: "Design & development",
            
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>
                        Projects
                    </h2>
                    <p></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectsCard
                                            Any={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane>
                            Lorem ipsum
                        </Tab.Pane>
                        <Tab.Pane>Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
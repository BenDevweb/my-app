import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
    const projects = [
       

         {
            title: "Création d'une app web de gestion de présences",
            description: "Full-stack Web App fonctionnelle développée sous Django",
            
        },

         {
            title: "Création d'une app mini-raccourcisseur d'URLs",
            description: "Full-stack Web App fonctionnelle développée  sous AdonisJS",
            
        },

         {
            title: "Création d'une app web, web mobile de gestion scolaire School Lama",
            description: "Full-stack App fonctionnelle développée  sous React, React-native et API Django(Backend)",
            
        },

         {
            title: "Création d'une API de gestion des issues",
            description: "Full-stack Web App fonctionnelle développée FastAPI et deploiee sur Render.com ",
            
        },

         {
            title: "Clone du réseau social X (ex Twitter)",
            description: "Full-stack Web App fonctionnelle développée sous AdonisJS",
            
        },

         {
            title: "Creation d'une app de gestion de tâches au nom de Task Manager",
            description: "Full-stack Web App fonctionnelle développée sous ReactJS et TailwindCSS",
            
        },

         {
            title: "Creation d'une app de fitness au nom de Fitness Tracker",
            description: "Full-stack Web App fonctionnelle développée sous Django et TailwindCSS",
            
        },

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>
                        Projets <span className="note">Faites un mouseover sur l'espace vide en dessous de Tab One pour voir mes réalisations !</span>
                    
                    </h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first" className="mt-12">Tab One</Nav.Link>
                        
                    </Nav.Item>

                    {/** */}
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
                            
                        </Tab.Pane>
                        <Tab.Pane></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
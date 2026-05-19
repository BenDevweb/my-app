import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import img from '../assets/img.avif';
import images2 from '../assets/images2.jpeg';
import images3 from '../assets/DB.jpg';



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
        
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Compétences
                        </h2>

                        <p>Développeur Web et Web Mobile et gestionnaire de bases de données.Créateur de solutions modernes et performantes.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={images} alt="desktop" height="110px"/>
                                <h5>Web Development</h5>
                            </div>
                                
                            <div className="item">
                                <img src={images2} alt=""/>
                                <h5>Web Mobile</h5>
                            </div>

                        
                            <div className="item">
                                <img src={images3} alt=""/>
                                <h5>Gestion de bases de données</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

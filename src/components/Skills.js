import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { defineComponents, IgcCarouselComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { Container, Row, Col } from "react-bootstrap";
import images from '../assets/Desktop.jpeg';
import images2 from '../assets/images2.jpeg';
import images3 from '../assets/DB.jpg';
import images4 from '../assets/UI.jpg';
 


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
                            Skills
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repellat eveniet nostrum, <br></br>ea necessitatibus neque fuga cupiditate adipisci temporibus recusandae!</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={images} alt=""/>
                                <h5>Web Development</h5>
                            </div>
                                
                            <div className="item">
                                <img src={images2} alt=""/>
                                <h5>Web Mobile</h5>
                            </div>

                            <div className="item">
                                <img src={images4} alt=""/>
                                <h5>Web Design </h5>
                            </div>

                            <div className="item">
                                <img src={images3} alt=""/>
                                <h5>DB Management</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

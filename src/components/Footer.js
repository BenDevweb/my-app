import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import '@fortawesome/fontawesome-free/css/all.min.css';


export const Footer = () => {
   return (
     <footer className="footer">
        <Container>
        <Row className="align-items-center">
            <MailChimpForm />
        </Row>
        <Col sm={6} className="text-center text-sm-end">
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/nzau-bimpula-263348265/"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/bimpulanzaubeni/"><i className="fa fa-instagram"></i></a>
            <a href="https://github.com/BenDevweb" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>

        </div>
        <p>CopyRight 2025, All Right Reserved</p>
        </Col>
    </Container>
    </footer>
   )
}
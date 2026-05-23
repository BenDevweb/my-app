import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        {/* Social icons */}
        <Row className="justify-content-center">
          <Col xs="auto" className="text-center">
            <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
              <a href="https://github.com/BenDevweb" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="GitHub">
                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/nzau-bimpula-263348265/" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/bimpulanzaubeni/" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
              </a>

              <a 
                  href="mailto:nbimpula@gmail.com" 
                  className="text-light" 
                  aria-label="Email"
              >
                  <i className="fas fa-envelope fa-2x" aria-hidden="true"></i>
              </a>

            </div>

            <p className="mb-0 small text-center">
              © {new Date().getFullYear()} Béni Bimpula Nzau — Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

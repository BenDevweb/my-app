import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

   useEffect( () => {
    if (window.scrollY > 50) {
        setScrolled(true);
    } else {
        setScrolled(false)
    }
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll );
   }, [])

    return (
      <Navbar expand="lg" className={scrolled ?"scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className="navbar-toggler-icon"></span>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={
                () =>onUpdateActiveLink('home')
              }>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={
                () => onUpdateActiveLink('skills')
              }>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={
                () => onUpdateActiveLink('projects')
              }>Projects</Nav.Link>
            </Nav>

            <span className="navbar-text">
                <div className="social-icons">
                    <a href="#"><img src="" alt="" /></a>
                    <a href=""  ><img src="" alt="" /></a>
                    <a href=""  ><img src="" alt="" /></a>
                </div>
              <button className="con" onClick={() => console.log("connect")}>
                Let's Connect
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
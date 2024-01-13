import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

//expand = 'sm', 'md', 'lg', 'xl', 'xxl'
const OffcanvasHeader = () => {
  const [expanded, setExpended] = useState(false);

  const expand = 'md'
  return (
        <Navbar
          expanded={expanded}
          expand={expand}
          className="bg-body-tertiary mb-3"
          fixed="top"
          onSelect={() => setExpended(false)}
          onToggle={() => setExpended(state => !state)}
        >
          <Container fluid>
            <Navbar.Brand className="text-green">Dr. Claudia Iftode</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-green" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dr. Claudia Iftode
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="text-green"  href="#orar">Orar</Nav.Link>
                  <Nav.Link className="text-green"  href="#programare">Programare</Nav.Link>
                  <Nav.Link className="text-green"  href="#contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default OffcanvasHeader;
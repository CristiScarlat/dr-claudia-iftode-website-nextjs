import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

//expand = 'sm', 'md', 'lg', 'xl', 'xxl'
const OffcanvasHeader = () => {
  const expand = 'md'
  return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" fixed="top">
          <Container fluid>
            <Navbar.Brand className="text-green">Dr. Claudia Iftode</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-green" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Dr. Claudia Iftode
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="text-green"  href="#orar">Program</Nav.Link>
                  <Nav.Link className="text-green"  href="#contact">Contact</Nav.Link>
                </Nav>
                {/*<Form className="d-flex">*/}
                {/*  <Form.Control*/}
                {/*    type="search"*/}
                {/*    placeholder="Search"*/}
                {/*    className="me-2 text-green"*/}
                {/*    aria-label="Search"*/}

                {/*  />*/}
                {/*  <Button variant="outline-success">Search</Button>*/}
                {/*</Form>*/}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default OffcanvasHeader;
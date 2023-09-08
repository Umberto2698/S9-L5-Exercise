import { Component } from "react";
import { Container, Navbar, NavDropdown, Form, Button } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="d-flex mb-3 me-3">
          <div className="d-flex align-items-center me-auto">
            <h1 className="me-3 fs-3">TV Shows</h1>
            <Navbar expand="xs">
              <Container fluid>
                <Button className="roundend-0 bg-black" variant="outline-secondary" style={{ height: 26 }}>
                  <NavDropdown className="text-white p-1" title="Genres" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4"> Horror</NavDropdown.Item>
                    <NavDropdown.Item href="#action4"> Cartoon</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Fantasy </NavDropdown.Item>
                  </NavDropdown>
                </Button>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <div className="d-flex">
                    <Form className="d-flex align-items-center">
                      <Button
                        className="rounded-0 btn-outline-secondary text-white"
                        type="button"
                        style={{ height: 20, width: 30 }}
                      >
                        <i className="bi bi-list"></i>
                      </Button>
                      <Button
                        className="rounded-0 btn-outline-secondary text-white"
                        type="button"
                        style={{ height: 20, width: 30 }}
                      >
                        <i className="bi bi-arrow-fullscreen"></i>
                      </Button>
                    </Form>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

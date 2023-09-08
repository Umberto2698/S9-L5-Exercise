import { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../css/home.css";
import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="ms-3">
        <Navbar expand="md" className="mb-2">
          <Container className="me-3">
            <Navbar.Brand href="#">
              <img src="../assets/logo.png" alt="Netflix" style={{ width: 80, height: 35 }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="px-2 text-white" href="#">
                  Home
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  TV Shows
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  Movies
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  Recently Added
                </Nav.Link>
                <Nav.Link className="px-2 text-white" href="#">
                  My List
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="d-flex align-items-center ms-auto">
                <Form className="d-flex">
                  <Button type="submit" className="text-white">
                    <i className="bi bi-search"></i>
                  </Button>
                  <Nav.Link className=" text-white" href="#">
                    KIDS
                  </Nav.Link>
                  <Nav.Link>
                    <Button type="button" className="text-white">
                      <i className="bi bi-bell-fill"></i>
                    </Button>
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Log out link</NavDropdown.Item>
                  </NavDropdown>
                </Form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;

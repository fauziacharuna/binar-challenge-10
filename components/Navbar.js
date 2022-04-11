import { Nav, Button, Container, Navbar } from 'react-bootstrap';
import Link from 'next/link'
const NavbarComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Challenge 10 Binar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto " style={{ width: "100%" }}>
                        <Nav.Link href="/">Home</Nav.Link>

                    </Nav>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Sign up</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent

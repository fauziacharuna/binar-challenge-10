import { Nav, Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

import Link from "next/link";
const NavbarComponent = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const authenticatedUser = useSelector(
    (state) => state.auth.authenticatedUser
  );

  const onSignOutClick = async () => {
    await dispatch(logout());
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Challenge 10 Binar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " style={{ width: "100%" }}>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href={"/Game"} passHref>
              <Nav.Link>Game</Nav.Link>
            </Link>
          </Nav>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            {authenticatedUser ? (
              <button disabled={auth.isSignOutLoading} onClick={onSignOutClick}>
                Logout
              </button>
            ) : (
              <>
                <Link href={"/login"} passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
                <Link href={"/register"} passHref>
                  <Nav.Link>Register</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;

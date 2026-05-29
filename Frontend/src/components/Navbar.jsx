import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import RBNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

function Navbar() {
    const { cart } = useContext(CartContext);
    const { token,logOut } = useContext(UserContext);
    console.log(cart);


    const total = cart.reduce(
        (acc, p) => acc + (p.price * p.count),
        0
    );
    return (
        <RBNavbar expand="lg" className="bg-black" variant={"dark"}>
            <Container>
                <RBNavbar.Brand as={Link} to="/" href="#home">Mamma mia</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" href="#">🍕Home</Nav.Link>
                        {token === true ? (
                            <>
                                <Nav.Link as={Link} to="/profile" href="#">🔓Profile</Nav.Link>
                                <Nav.Link as={Link} to="/" href="#" onClick={logOut}>🔒Logout</Nav.Link>
                            </>) :
                            (<>
                                <Nav.Link as={Link} to="/login" href="#">🔐Login</Nav.Link>
                                <Nav.Link as={Link} to="/register" href="#">🔐Register</Nav.Link>
                            </>
                            )}
                    </Nav>
                    <Nav >
                        <Nav.Link as={Link} to="/cart" href="#">🛒Total:${total.toLocaleString()}</Nav.Link>
                    </Nav>

                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    );
}

export default Navbar;
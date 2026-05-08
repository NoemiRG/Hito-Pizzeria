import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import RBNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {

    const total = 25000;
    const token = false;
    return (
        <RBNavbar expand="lg" className="bg-black" variant="dark">
            <Container>
                <RBNavbar.Brand href="#home">Mamma mia</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">🍕Home</Nav.Link>
                        {token === true ? (
                            <>
                                <Nav.Link href="#">🔓Profile</Nav.Link>
                                <Nav.Link href="#">🔒Logout</Nav.Link>
                            </>) : 
                            (<>
                                <Nav.Link href="#">🔐Login</Nav.Link>
                                <Nav.Link href="#">🔐Register</Nav.Link>
                            </>
                        )}
                    </Nav>

                    <Nav >
                        <Nav.Link href="#">🛒Total:${total.toLocaleString()}</Nav.Link>
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    );
}

export default Navbar;
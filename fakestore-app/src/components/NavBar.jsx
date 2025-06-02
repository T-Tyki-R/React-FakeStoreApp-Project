// Imports
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return(
        <Navbar bg="secondary" expand="lg" className="p-3 mb-4">
            <Navbar.Brand href="/" className='text-light'><strong>FakeStore</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link as={NavLink} to="/" activeclassname="active" className="text-light">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/product" activeclassname="active" className="text-light">
                        Products
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="add-product" activeclassname="active" className="text-light">
                        Add Products
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar
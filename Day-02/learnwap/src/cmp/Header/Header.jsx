import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../json-api/menu";
import Brand from "../../json-api/Brand";
const Header = () => {
    const design = (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">{Brand.name}</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-100">
                            {
                                menu.map((data) => {
                                    return <Link to={data.url} className="nav-link">{data.label}</Link>
                                })
                                    
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
    return design;
}
export default Header;
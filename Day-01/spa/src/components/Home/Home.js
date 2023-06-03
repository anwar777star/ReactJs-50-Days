import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./Home.css";

import{
    Alert,
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Modal,
    
} from "react-bootstrap";
const Home = () => {

    const h1Design = {
        color: "red",
        backgroundColor: "pink",
        fontSize: "50px",
    }
    //declaring json data
    const data = {
        title: "Home Page",
        desc: "This is the home page of my website",
    }
    //creating array
    const arr = ["a", "b", "c", "d", "e"];

    //creating function
    const myFunction = () =>{
        return "This is my function";
    }
    //creating function for event
    const myEvent = () =>{
        alert("This is my event");
    }

    const design = (
        <>
        {/* accessing json data with inline css */}
        <h1 className="animate__animated animate__shakeX animate__infinite" style={h1Design}>{data.title}</h1>
        <p>{data.desc}</p>

        {/* accessing array */}
        <p>{arr[1]}</p>
        {/* calling function */}
        <p>{myFunction()}</p>

        {/* calling function for event */}
        <Button onClick={myEvent}>Click Me</Button>

        {/* accessing entire json data */}
        <p>{JSON.stringify(data)}</p>

        {/* accessing date Date object as string*/}
        <p>{JSON.stringify(new Date)}</p>

        <Alert variant="primary">This is alert</Alert>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

        </>
    );
    return design;
}

export default Home;
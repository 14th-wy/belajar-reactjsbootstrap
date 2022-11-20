import { Navbar, Nav, Container} from "react-bootstrap";


export default function Navigation() {

    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Library Movies</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">
                            Trending
                        </Nav.Link>
                        <Nav.Link href="superhero">
                            Superhero
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
    
}
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
    return (
        <div style={{background:"rgb(220, 53, 70)"}}> 
            <Navbar variant="dark">
                <Container className="justify-content-start">
                    <img src="https://cdn-icons-png.flaticon.com/512/5849/5849042.png" alt="Bootstrap" width="30" height="24" style={{ marginLeft: "55px" }}></img>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>

                    <img src="https://cdn-icons-png.flaticon.com/512/6324/6324813.png" alt="Bootstrap" width="30" height="24" style={{ marginLeft: "55px" }}></img>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        Contacto 
                    </Link>
                </Container>

                <Navbar.Brand>Happy Cake</Navbar.Brand>
                <img src="https://cdn-icons-png.flaticon.com/512/2872/2872396.png" alt="Bootstrap" width="30" height="24" style={{ marginRight: "55px" }}></img>

            </Navbar>

        </div>
    )
};

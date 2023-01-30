import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src="https://cdn-icons-png.flaticon.com/512/2872/2872396.png" alt="Bootstrap" width="300" height="240"></img>
    </Container>
  );
};

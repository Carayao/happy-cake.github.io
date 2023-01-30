import { Form, Button } from "react-bootstrap";


export default () => {
    return (
<div>
<center><h3 style={{
  marginLeft:"200px",
  marginRight:"200px",
  marginTop:"50px"}}> Cuéntanos, ¿en qué te podemos ayudar?</h3>

<Form style={{
    marginLeft:"200px",
  marginRight:"200px",
  marginTop:"50px"}}>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Detalle</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button style={{background:"rgb(220, 53, 70)"}}>Enviar</Button>
    </Form></center>
    </div>
);
};




import { Button, Form } from "react-bootstrap";

const ListaTarea = () => {
  return (
    <section className="text-light">
      <h3>Tp_4 :</h3>
      <p>
        Crear una aplicación web que muestre una lista de tareas, al ingresar
        una tarea en el input y presionar enter, esta tarea se debe mostrar en
        una lista como la imagen a continuación:
      </p>
      <Form>
        <Form.Group
          className="mt-5 mb-5 d-flex me-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control type="email" placeholder="Ingrese Su Tarea :" className="me-2" />
          <Button size='active' type='submit' >Agregar</Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default ListaTarea;

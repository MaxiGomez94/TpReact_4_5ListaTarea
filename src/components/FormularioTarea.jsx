import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  //  se declara el nombre del estado , luego la funcion que manipula el estado que seria setTarea
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    // guarda el state tarea en el arrayTarea
    // operador spread es (...)
    setArrayTareas([...arrayTareas,tarea])
  // limpiar imput
    setTarea('');
  }

  return (
    <section className="text-light">
      <h3>Tp_4 :</h3>
      <p>
        Crear una aplicación web que muestre una lista de tareas, al ingresar
        una tarea en el input y presionar enter, esta tarea se debe mostrar en
        una lista como la imagen a continuación:
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mt-5 mb-5 d-flex me-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese Su Tarea :"
            className="me-2"
            onChange={(e)=>setTarea(e.target.value)}
            value={tarea}
          />
          <Button size="active" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arrayTareas={arrayTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

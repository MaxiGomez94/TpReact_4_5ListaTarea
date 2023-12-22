import { ListGroup,Button } from "react-bootstrap";

const IntemTarea = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">Tarea1 <Button variant="danger">Eliminar</Button></ListGroup.Item>
    );
};

export default IntemTarea;
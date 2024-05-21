import AddTask from "./components/AddTask";
import NavigationBar from "./components/NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container>
      <NavigationBar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <AddTask />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

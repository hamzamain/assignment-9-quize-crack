import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { ToastContext } from "../ShowQuiz";

function ShowTst({ forToast }) {
  const [show, setShow] = useContext(ToastContext);
  const [correctAnswer, eachQuestion, option] = forToast;

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">
              <span className="fw-bold">Your Answer: </span>
              {option}
            </strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>
            <b>
              Correct Answer:{" "}
              <span className="text-success">{correctAnswer}</span>
            </b>
          </Toast.Body>
        </Toast>
      </Col>
      {/* <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col> */}
    </Row>
  );
}

export default ShowTst;

import React from "react";
import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { ToastContext } from "../ShowQuiz";

function ShowTst() {
  const [showA, setShowA, toggleShowA] = useContext(ToastContext);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toast show={!showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ShowTst;

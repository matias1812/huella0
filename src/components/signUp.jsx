import React, { useState, useEffect  } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuth } from "../context/auth.context";
import "./signup.css";

function Signup() {
  const auth = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const isRegistered = localStorage.getItem("registered");
    if (isRegistered === "true") {
      setRegistered(true);
    } else(isRegistered == "false")
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoogle = (e) => {
    e.preventDefault()
    auth.loginWhithGoogle()
    localStorage.setItem("registered", "true");
    setRegistered(true);
    
  }
  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(email, password);
    setRegistered(true);
    localStorage.setItem("registered", "true");
  };
  return (
    <>
      <div>
        {!registered && (
          <Button
            variant="outline-light"
            className="botonsignup"
            onClick={handleShowModal}
          >
            subscribirse
          </Button>
        )}
        {!registered && (
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            className="modalsignup"
          >
            <Modal.Header closeButton>
              <Modal.Title>subscribirse</Modal.Title>
            </Modal.Header>
            <Modal.Body className="registrar">
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Repite contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Reingresa tu contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="registrarse"></div>
              </Form>
            </Modal.Body>
            {!registered && (
              <Modal.Footer>
                <Button
                  onClick={(e) => handleRegister(e)}
                  variant="outline-primary"
                >
                  Registrarse
                </Button>
                <Button onClick={(e) => handleGoogle(e)}>Google</Button>
              </Modal.Footer>
            )}
          </Modal>
        )}
      </div>
    </>
  );
}

export default Signup;

import chati from "/chat.svg";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import "./body.css";
function ChatBot() {
  const [messageInput, setMessageInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [chat, setChat] = useState([]);
  const [botResponses, setBotResponses] = useState([]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      setChat([...chat, messageInput]);
      const botResponse = getBotResponse(messageInput); // Lógica para obtener la respuesta del chatbot
      setBotResponses([...botResponses, botResponse]);
      setMessageInput("");
    }
  };

//   const getChatbotResponse = () => {
//     // Simulación de respuesta del chatbot después de 1 segundo
//     setTimeout(() => {
//       // Respuesta del chatbot
//       const botResponse = "¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?";
//       // Agregar la respuesta del chatbot al estado del chat
//       setChat((prevChat) => [
//         ...prevChat,
//         { message: botResponse, sender: "bot" },
//       ]);
//     }, 1000);
//   };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hola")) {
      return "¡Hola! ¿En qué puedo ayudarte?";
    } else if (lowerCaseMessage.includes("adios")) {
      return "¡Hasta luego! Que tengas un buen día.";
    } else if (lowerCaseMessage.includes("ayuda")) {
      return "Claro, ¿en qué necesitas ayuda?";
    }else if (lowerCaseMessage.includes("creadores")) {
      return "mayoyi belen";
    } else {
      return "Lo siento, no entiendo tu mensaje. ¿Podrías ser más específico?";
    }
  };

  return (
    <>
      <button
        style={{ position: "fixed" }}
        placement="end"
        className="round-button"
        onClick={handleModalOpen}
      >
        <img className="chat" src={chati} alt="" />
      </button>
      <Modal className="modalchat" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {chat.map((message, index) => (
            <div key={index} className="message">
              <div className="user-message">{message}</div>
              {botResponses[index] && (
                <div className="bot-message">{botResponses[index]}</div>
              )}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div className="input-container">
            <input
              type="text"
              value={messageInput}
              onChange={handleInputChange}
              placeholder="Escribe un mensaje..."
            />
            <Button variant="outline-primary" onClick={handleSendMessage}>
              Enviar
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChatBot;

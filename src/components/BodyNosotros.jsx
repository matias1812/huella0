import Carousel from "react-bootstrap/Carousel";
import biogas from "/biogas.png";
import ChatBot from "./chatbot";
import logo from "/logo.jpeg";

import Card from 'react-bootstrap/Card';

import "./Body.Nosotros.css";

function BodyNosotros() {
  return (
    <>
      <Carousel fade className="imagenes1">
        <Carousel.Item>
          <img className="img" src={biogas} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={biogas} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={biogas} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ChatBot/>
      <h1 className="ques">¿Que es Fatus?</h1>
      <h4 className="descripcion">Mejor dicho quienes son Fatus, Fatus es un grupo de jovenes emprendedores con sueños, metas y con un objetivo <br/> en comun poder ayudar a cuidar al medio hambiente adaptando biogeneradores industriales al alcance de cualquier persona, ademas que el gas es creado de desechos organicos tambien reciclando los desechos para fabricar tierra de hoja ayudando aun mas al medio hambiente.</h4>
      <h5 className="precentacion">Te presentamos nuestro equipo de trabajo conformado por:</h5>
      <div className="cards">
      <Card className="card" border="success" style={{ width: '20rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={logo} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            aporte al proyecto Fatus
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card" border="success" style={{ width: '20rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={logo} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Maryory Belen</Card.Title>
          <Card.Text>
            aporte al proyecto Fatus
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card" border="success" style={{ width: '20rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={logo} />
        </Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            aporte al proyecto Fatus
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}
export default BodyNosotros;

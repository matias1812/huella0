import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ChatBot from "./chatbot";

import biogas from "/biogas.png";
import car from "/cart3.svg";
import logo from "/logo.jpeg";

import "./body.css";

function Body() {
  
  return (
    <>
      <Carousel fade className="imagenes">
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
      <ChatBot />
      <h1 className="propuesta">
        ¿Como con Fatus contribuimos a el <br /> medio hambiente y a tu
        economia?{" "}
      </h1>
      <h4 className="descripcion">
        Con una de las propuestas mas inovadoras, Fatus trae a las personas que
        sufren por el aumento del precio del gas,
        <br />
        los biodigestores, un artefacto industrialisado adaptado a la comodida
        de tu hogar. utilizando los componentes organicos que desechas todos los
        meses el cual es el 50% de los reciduos que desecha una familia
        convencional.{" "}
      </h4>
      <h5 className="precentacion">
        Aqui te presentamos los 3 biodigestores de Fatus:
      </h5>
      <div className="cards">
        <Card className="card1" border="success" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Biodigestor-junior</Card.Title>
            <Card.Text>
              Este biodigestor va mas enfocado a las personas que en su hogar no
              superan las 2 personas
            </Card.Text>
          </Card.Body>
          <Card.Footer className="footer1">
            <Button className="agregar-al-carrito" variant="outline-success">
              Agregar al carrito
              <img className="icono1" src={car} alt="" />
            </Button>
          </Card.Footer>
        </Card>
        <Card className="card1" border="success" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Biodigestor-familiar</Card.Title>
            <Card.Text>
              Este biodigestor va mas enfocado a una familia nuclear que no
              supere las 5 personas
            </Card.Text>
          </Card.Body>
          <Card.Footer className="footer1">
            <Button className="agregar-al-carrito" variant="outline-success">
              Agregar al carrito
              <img className="icono1" src={car} alt="" />
            </Button>
          </Card.Footer>
        </Card>
        <Card className="card1" border="success" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Biodigestor-senior</Card.Title>
            <Card.Text>
              Este biodigestor va enfocado a personas que tengan produccion
              ganadera como una parcela o huerto
            </Card.Text>
          </Card.Body>
          <Card.Footer className="footer1">
            <Button className="agregar-al-carrito" variant="outline-success">
              agregar al carrito
              <img className="icono1" src={car} alt="" />
            </Button>
          </Card.Footer>
        </Card>
      </div>
      <h1 className="propuesta2">
        ¿Que hago con los desechos organicos despues de haber generado el biogas
        ?{" "}
      </h1>
      <h4 className="descripcion2">
        Junto al equipo de trabajo de Fatus tenemos varias opciones una de ellas
        es si tienen plantas o arboles en el hogar <br /> usar como abono 100%
        recomendable, en el caso de no tener y no querer desecharlo puedes
        contactarnos para poder reciclarlo y darle un mejor uso aparte tendras
        un 15% de descuento en tu proxima compra de alguna refaccion o por
        mantencion.{" "}
      </h4>
      <h5 className="precentacion2">
        Con todos los desechos organico que recolectamos le presentamos a Fatus
        tirra de oja en 2 modelos super convenientes:
      </h5>
      <div className="cards2">
        <Card className="card2" border="success" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Fatus tierra de hoja 25L</Card.Title>
          </Card.Body>
          <Card.Footer className="footer1">
            <Button className="agregar-al-carrito" variant="outline-success">
              Agregar al carrito
              <img className="icono1" src={car} alt="" />
            </Button>
          </Card.Footer>
        </Card>
        <Card className="card2" border="success" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Fatus tierra de hoja 40L</Card.Title>
          </Card.Body>
          <Card.Footer className="footer1">
            <Button className="agregar-al-carrito" variant="outline-success">
              agregar al carrito
              <img className="icono1" src={car} alt="" />
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default Body;

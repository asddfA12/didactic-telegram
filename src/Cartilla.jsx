import './App.css';
import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImg
} from 'reactstrap';
function Cartilla (props) {
  return (
    <div className="CartillaTotal">
      <div className="Cartilla1">
      <Card style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle tag="h5">{props.titulo1}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.subtitulo}
          </CardSubtitle>
        </CardBody>
        <CardImg
          alt="Card cap"
          src={props.medi}
          width="100%"
        />
        <CardBody>
          <CardText>
            {props.descripcion}
          </CardText>
          <CardLink href="#">Agregar a carrito</CardLink>
          
        </CardBody>
      </Card>
      </div>
  </div>
  );
};

export default Cartilla;
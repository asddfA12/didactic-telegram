import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

function Categorias(promps){
  return (
    <ListGroup>
      <ListGroupItem className="justify-content-between">
        {promps.lista}{' '}
        <Badge pill>
          {promps.numero}
        </Badge>
      </ListGroupItem>
      
      
      
    </ListGroup>
  );
};

export default Categorias;
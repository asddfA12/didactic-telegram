import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function Pagina2(props) {
  const [popoverOpen, setPopoverOpen] = useState(false);

    function togglePopover (props) {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div className="opciones">
      <Button id="Popover1" type="button" onClick={togglePopover}>
        {props.descripcion}
      </Button>
      <Popover
        flip
        target="Popover1"
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>
          {props.nombrepromo}
        </PopoverHeader>
        <PopoverBody>
          {props.parrafo}
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default Pagina2;
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
  const {device} = useContext(Context);
  return (
    <Row className='d-flex'>
      {device.brands.map(brand =>
        <Card
          style={{cursor: 'pointer'}}
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          className='p-3'
        >
          {brand.name}
        </Card>
      )}
    </Row>
  );
});

export default BrandBar;
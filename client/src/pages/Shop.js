import React from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className='mt-2'>
          <TypeBar/>
        </Col>

        <Col md={9} className='mt-2'>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
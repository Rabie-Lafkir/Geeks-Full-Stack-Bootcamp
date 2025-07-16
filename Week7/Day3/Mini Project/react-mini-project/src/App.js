import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { ColumnLeft } from './columns/ColumnLeft';
import { ColumnRight } from './columns/ColumnRight';

import './App.scss';

export const App = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
        <Navbar.Brand>Error boundaries in react</Navbar.Brand>
      </Navbar>
      <Container fluid className="p-0">
        <Row noGutters="true">
          <Col md={6} className="column column-left">
            <ColumnLeft />
          </Col>
          <Col md={6} className="column column-right">
            <ColumnRight />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

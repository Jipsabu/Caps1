import React from 'react';
import { Navbar, Nav, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { Icon } from '@iconify/react';
const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-5" style={{ borderBottom: '1px solid lightgray' }}>
      <Navbar.Brand href="#">
        <img
          src={logo}
          style={{ width: 174, height: '100%' }}
        />
      </Navbar.Brand>
      <Form className="d-flex ms-3" style={{ width: '300px' }}>
        <InputGroup>
          <Form.Control

            type="text"
            placeholder="Tìm kiếm tất cả"
            aria-label="Search"
            className="rounded-pill"
            style={{
              background: '#F0F7FC',
              boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.16)',
              border: '1px solid #ACAAAA'
            }}

          />

        </InputGroup>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          <Nav.Link href="#" className="d-flex align-items-center">
            <Icon icon="twemoji:flag-vietnam" />
            <span>VN|VND</span>
          </Nav.Link>
          <Nav.Link href="#">Chuyến đi</Nav.Link>
          <Nav.Link href="#">Hỗ trợ</Nav.Link>
          <Button style={{ backgroundColor: '#033E8C', color: 'white' }} variant="primary" className="me-2 rounded-pill">
            Đăng nhập
          </Button>
          <Button style={{ backgroundColor: 'white', color: '#033E8C', borderColor: '#033E8C' }} variant="outline-primary" className="rounded-pill px-4">
            Đăng ký
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

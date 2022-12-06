import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Navigation()  {
  return (
  <>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/menu">Menu</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/shopping">Shopping</Link>
      </Nav.Item>
    </Nav>
    <Outlet />
    </>
  );
}

export default Navigation;
  
import './App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          ----- Principal ----
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://turbo-space-computing-machine-5g4467rv5qp4cpgrq-3000.app.github.dev/">Analgesicos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://fantastic-waddle-jjrrxv959w5jhqrg7-3000.app.github.dev/">
                Productos para la cara (Skincare)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Lo nuevo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Salud y medicamentos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Mamá y bebé
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Cuidado Personal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Hogar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://fantastic-waddle-jjrrxv959w5jhqrg7-3000.app.github.dev/">
                Belleza
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
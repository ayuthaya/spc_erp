import React, { Component } from "react";
import "../App.css";

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Sales</NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tasks
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="./CreditOrderView">
                    Credit Order
                  </DropdownItem>
                  <DropdownItem>Transfer Order</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reserved Order</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

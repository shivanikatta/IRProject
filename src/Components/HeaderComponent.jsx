import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcScatterPlot } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>
                    <FcHome size={20} /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/vaccine">
                    <span className="fa fa-home fa-lg"></span>
                    <FcScatterPlot size={20} /> Vaccine Hesitancy/Persuasion
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/global">
                    <span className="fa fa-info fa-lg"></span>
                    <FcComboChart size={20} />
                    Global Visual{" "}
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logoSvg from '../../assets/img/brand/logo-horizontal.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" id="navigation" className="border-bottom fixed-top">
          <NavbarBrand href="/">
            <img src= {logoSvg} alt="logo-navbar" className="logo-navbar"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Sign in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled={true}>or</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

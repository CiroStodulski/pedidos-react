import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux'

import { logoff } from '../../../auth/authAction.js'

class NavComponent extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { logoff } = this.props;
    return (
      <div>
        <Navbar color="withe" light expand="md">
          <NavbarBrand href="#/home">Pedidos react</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/pedidos">Pedidos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/user">Usuarios</NavLink>
              </NavItem>
              <UncontrolledDropdown nav className="mr-2" >
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Meus dados
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={logoff}>
                    Deslogar
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logoff }, dispatch);

export default connect(null, mapDispatchToProps)(NavComponent);
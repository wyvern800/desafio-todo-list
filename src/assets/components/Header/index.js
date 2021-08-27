import React, { Component } from 'react';
import { Container } from './styles';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="nav-link-active">
                Home
              </NavLink>
            </li>
          </ul>
        </Container>
      </>
    );
  }
}

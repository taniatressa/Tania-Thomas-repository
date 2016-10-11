import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class HeaderNavigation extends React.Component {
  render() {
   let brand = <a href="#">ToDo App</a>;
   return (
      <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
         <Nav right eventKey={0}>
           <h3 style={{color : '#fff'}}>React ToDos App</h3>
         </Nav>

      </Navbar>
    );
  }
}

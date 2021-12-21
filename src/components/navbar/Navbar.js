import React, { useState } from 'react';
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyle';

const Navbar = () => {
  //* styled componentte tanımlanan isOpen'ı kontrol maksatlı yazdık
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      {/* //? logo styled componentte link olarak oluşturulduğu için "to" koymamız gerekir */}
      <Logo to='/'>
        <i>{'<Clarusway>'}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to={{ pathname: 'https://github.com/hsynarsln?tab=repositories' }}>Github</MenuLink>
        <MenuLink to='/login'>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

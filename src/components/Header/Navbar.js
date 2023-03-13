


import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './PrimaryNav'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activestyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activestyle>
            About
          </MenuLink>
          <MenuLink to="/products" activestyle>
            Products
          </MenuLink>
          <MenuLink to="/contactus" activestyle>
            Contact us
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar
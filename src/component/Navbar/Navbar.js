import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
} from "./Navbar.element";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <IconContext.Provider value={{ color: 'red' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon/>ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click = {click}>
              
                <NavItems>
                    <NavLinks to='/' >
                        Home
                    </NavLinks>
                </NavItems>

                <NavItems>
                    <NavLinks to='/' >
                        Services
                    </NavLinks>
                </NavItems>

                <NavItems>
                    <NavLinks to='/' >
                        Reviews
                    </NavLinks>
                </NavItems>

                <NavItems>
                    <NavLinks to='/' >
                        Contact
                    </NavLinks>
                </NavItems>

                <NavItems>
                    <NavLinks to='/' >
                        Sign Up
                    </NavLinks>
                </NavItems>
            </NavMenu>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

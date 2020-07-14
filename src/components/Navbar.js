import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    color: "aliceblue",
    textDecoration: "none",
  };

  return (
    <nav>
      <h3>SOMNIUM</h3>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Products</li>
        </Link>
        <Link style={navStyle} to='/shoppingcart'>
          <li>Shopping cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

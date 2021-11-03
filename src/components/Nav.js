import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li> 
          <Link to="/Curd">CRUD Operations</Link>
        </li>
        <li> 
        <Link to="/form">Form Validation - Custom Hook</Link>
      </li>
      <li> 
        <Link to="/reacthookform">React Form Hook</Link>
      </li>
      </ul> 
    </nav>
  );
};

export default Nav;

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
          <Link to="/Curd">CRUD</Link>
        </li>
        <li>
          <Link to="/gallery">Photo Gallery</Link>
        </li>
        <li>
          <Link to="/reacthookform">RForm Hook</Link>
        </li>
        <li>
          <Link to="/teacollection">Tea Collection</Link>
        </li>
        <li>
          <Link to="/pagination">Pagination</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

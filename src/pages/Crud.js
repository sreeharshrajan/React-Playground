import React from "react";
import { Link } from "react-router-dom";
import Read from "../components/read/read";

const Crud = () => {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>React CRUD App</h3>
      <ul className="crud">
        <li>
          <Link to="/create">Do you want to create a new user?</Link>
        </li>
      </ul> 

      <div>
        <br />
        <Read />
      </div>
    </div>
  );
};

export default Crud;

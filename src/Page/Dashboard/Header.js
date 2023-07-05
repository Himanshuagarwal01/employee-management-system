import React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Employee Management Software</h1>

        <div style={{ marginTop: "30px", marginBottom: "18px" }}></div>
        <div style={{ marginTop: "30px", marginBottom: "18px" }}>
          <button
            className="round-button"
            style={{ color: "white", backgroundColor: "black" }}
          >
            <Link to="/add">Add Employee</Link>
          </button>
        </div>
      </header>
    );
  }
}

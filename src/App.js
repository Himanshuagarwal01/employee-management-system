import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Page/Dashboard";
import Add from "./Page/Dashboard/Add";
import Edit from "./Page/Dashboard/Edit";
import { employeesData as employee } from "./data";
import React from "react";

class App extends React.Component {
  state = {
    selectedemployee: {},
  };
  getselectedid = (id) => {
    console.log("App.js", id);
    this.setState({ selectedemployee: id });
  };
  render() {
    return (
      <div>
        <Router>
          {/* <Dashboard/> */}
          <Routes>
            <Route
              path="/"
              element={<Dashboard getselectedid={this.getselectedid} />}
            />
            <Route path="/add" element={<Add employee={employee} />} />
            <Route
              path="/edit"
              element={<Edit singleemployee={this.state.selectedemployee} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

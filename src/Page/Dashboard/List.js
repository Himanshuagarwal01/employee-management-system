import React from "react";
import { Link } from "react-router-dom";

export default class List extends React.Component {
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });
  // we have a default class available in the javascript of internationalisation which you to set the local format of the particular field in this salary field we want the local format of salary is us dolllars
  render() {
    console.log(this.props.employee);
    return (
      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.employee.length > 0 ? (
              this.props.employee.map((employee, i) => (
                <tr key={employee.id}>
                  <td>{i + 1}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{this.formatter.format(employee.salary)}</td>

                  <td>{employee.date} </td>
                  <td className="text-right">
                    <button
                      onClick={() => this.props.handleEdit(employee.id)}
                      className="button muted-button"
                    >
                      <Link to="/edit">Edit</Link>
                    </button>
                  </td>
                  <td className="text-left">
                    <button
                      onClick={() => this.props.handleDelete(employee.id)}
                      className="button muted-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Employees</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

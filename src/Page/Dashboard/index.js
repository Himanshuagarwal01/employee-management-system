import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { employeesData } from "../../data";
import Swal from "sweetalert2";
import Header from "./Header";
import List from "./List";
// import { useNavigate } from "react-router";

// const navigate=useNavigate();/
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: employeesData,
      isAdding: false,
      isEditing: false,
      selectedEmployee: [],
      // setAdding:true,
      setEditing: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit = (id) => {
    console.log("Edit Id", id);
    let employ = this.state.employee.filter((emp) => emp.id === id);
    const { history } = this.props;
   

    console.log("employ", employ);
    this.setState({
      selectedEmployee: employ,
    });
    this.props.getselectedid(employ);
    // this.setState((prevstate) => {
    //   return {
    //     selectedEmployee: this.state.selectedEmployee.push(employ),
    //   };
    // });
    // console.log("selectedEmployee", this.state.selectedEmployee);
  };

  //   handleEdit = (id) => {
  //   console.log("Edit Id", id);
  //   const employ = this.state.employee.filter((emp) => emp.id === id);
  //   console.log("employ", employ);

  //   // this.setState({
  //   //   selectedEmployee: employ
  //   // });
  //   this.setState({
  //     selectedEmployee: employ
  //   }, () => {
  //     console.log("selectedEmployee", this.state.selectedEmployee);
  //   });

  //   console.log("selectedEmployee", this.state.selectedEmployee);
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.selectedEmployee !== this.state.selectedEmployee) {
  //     console.log("selectedEmployee", this.state.selectedEmployee);
  //   }
  // }

  // handleEdit = (id) => {
  //   console.log("Edit Id", id);
  //   const employ = this.state.employee.filter((emp) => emp.id === id);
  //   console.log("employ", employ);

  //   const prevSelectedEmployee = this.state.selectedEmployee; // Store previous state

  //   this.setState({
  //     selectedEmployee: employ
  //   }, () => {
  //     console.log("Previous selectedEmployee", prevSelectedEmployee);
  //     console.log("Current selectedEmployee", this.state.selectedEmployee);
  //   });
  // };

  handleDelete = (id) => {
    console.log("Delete id", id);

    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employees] = this.state.employee.filter((emp) => emp.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employees.firstName} ${employees.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        this.setState({
          employee: this.state.employee.filter((emplo) => emplo.id !== id),
        });
      }
    });
  };
  

  render() {
    console.log("selectedEmployee", this.state.selectedEmployee);
    return (
      <div className="container">
        {
          // List
          !this.state.isAdding && !this.state.isEditing && (
            <>
              <Header setAdding={this.state.setAdding} />
              <List
                employee={this.state.employee}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            </>
          )
        }
      </div>
    );
  }
}

export default Dashboard;

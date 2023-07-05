import Swal from "sweetalert2";
import { employeesData as employees } from "../../data";
import React from "react";
import { Grid, Box } from "@mui/material";

class Add extends React.Component {
  state = JSON.parse(localStorage.getItem("formData")) || {
    employeee: employees,
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    sex: "",
    mobile: "",
    personalEmail: "",
    // officialEmail: "",
    // permanentAddress: "",
    // currentAddress: "",
    // fatherName: "",
    // motherName: "",
    // spouseName: "",
    // aadharNo: "",
    // panNo: "",
    // accountNo: "",
    // IFSECode: "",
    // emergencyContactNo: "",
    // emergencyContactPersonName: "",
    // DOB: "",
    salary: "",
    date: "",
    // linkedInProfileLink: "",
  };
  
  handleSubmit = (event,error) => {
    event.preventDefault();
    console.log(error);
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      // !this.state.officialEmail ||
      // !this.state.permanentAddress ||
      // !this.state.currentAddress ||
      // !this.state.fatherName ||
      // !this.state.motherName ||
      // !this.state.aadharNo ||
      // !this.state.panNo ||
      // !this.state.accountNo ||
      // !this.state.IFSECode ||
      // !this.state.emergencyContactNo ||
      // !this.state.emergencyContactPersonName ||
      // !this.state.DOB ||
      !this.state.salary ||
      !this.state.date
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newId = employees.length + 1;
    const newEmployee = {
      id: newId,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      // age: this.state.age,
      // sex: this.state.sex,
      // mobile: this.state.mobile,
      email: this.state.email,
      // officialEmail: this.state.officialEmail,
      // permanentAddress: this.state.permanentAddress,
      // currentAddress: this.state.currentAddress,
      // fatherName: this.state.fatherName,
      // motherName: this.state.motherName,
      // spouseName: this.state.spouseName,
      // aadharNo: this.state.aadharNo,
      // panNo: this.state.panNo,
      // accountNo: this.state.accountNo,
      // IFSECode: this.state.IFSECode,
      // emergencyContactNo: this.state.emergencyContactNo,
      // emergencyContactPersonName: this.state.emergencyContactPersonName,
      // DOB: this.state.DOB,
      salary: this.state.salary,
      date: this.state.date,
    };
    this.props.employee.push(newEmployee);
    console.log("newEmployee", newEmployee);
    // redirect("/");
    // navi
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${this.state.firstName} ${this.state.lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  componentDidUpdate = () => {
    // console.log("componentDidUpdate");
    localStorage.setItem("formData", JSON.stringify(this.state));
  };
  render() {
    // console.log("Render");

    return (
      <>
        <div className="small-container">
          <h1>ADD EMPLOYEE</h1>
          <form onSubmit={this.handleSubmit}>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Grid item xs={8}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    name="firstName"
                    id="firstName"
                    value={this.state.firstName}
                  />
                </Grid>
                {/* <Grid item xs={4}>
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Middle Name "
                    onChange={this.handleChange}
                    name="middleName"
                    value={this.state.middleName}
                  />
                </Grid> */}
                <Grid item xs={8}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    name="lastName"
                    value={this.state.lastName}
                  />
                </Grid>
                {/* <Grid item xs={4}>
                  <label htmlFor="mobileNo">mobile No</label>
                  <input
                    type="number"
                    maxLength="10"
                    placeholder="mobile No"
                    onChange={this.handleChange}
                    onk     
                    name="mobileNo"
                    value={this.state.mobileNo}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    placeholder="Age"
                    onChange={this.handleChange}
                    name="age"
                    value={this.state.age}
                  />
                </Grid> */}
                <Grid item xs={8}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Personal Email"
                    onChange={this.handleChange}
                    name="email"
                    id="email"
                    value={this.state.email}
                  />
                  </Grid>
                {/* </Grid>
                <Grid item xs={4}>
                  <label htmlFor="officialEmail">Official Email</label>
                  <input
                    type="email"
                    placeholder="Official Email"
                    onChange={this.handleChange}
                    name="officialEmail"
                    id="officialEmail"
                    value={this.state.officialEmail}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="permanentAddress">Permanent Address</label>
                  <input
                    type="text"
                    placeholder="Permanent Address"
                    id="permanentAddress"
                    checked={this.state.permanentAddress}
                    onChange={this.handleChange}
                    name="permanentAddress"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="currentAddress">Current Address</label>
                  <input
                    type="text"
                    id="currentAddress"
                    placeholder="Current Address"
                    checked={this.state.currentAddress}
                    onChange={this.handleChange}
                    name="currentAddress"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="fatherName">Father Name</label>
                  <input
                    type="text"
                    id="fatherName"
                    placeholder="Father Name"
                    checked={this.state.fatherName}
                    onChange={this.handleChange}
                    name="fatherName"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="motherName">Mother Name</label>
                  <input
                    type="text"
                    id="motherName"
                    placeholder="Mother Name"
                    checked={this.state.motherName}
                    onChange={this.handleChange}
                    name="motherName"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="spouseName">Spouse Name</label>
                  <input
                    type="text"
                    id="spouseName"
                    placeholder="Spouse Name"
                    checked={this.state.spouseName}
                    onChange={this.handleChange}
                    name="spouseName"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="aadharNo">Aadhar Number</label>
                  <input
                    type="number"
                    placeholder="Aadhar Number"
                    id="aadharNo"
                    checked={this.state.aadharNo}
                    onChange={this.handleChange}
                    name="aadharNo"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="panNo">PanCard Number</label>
                  <input
                    type="text"
                    id="panNo"
                    placeholder="PanCard Number"
                    checked={this.state.panNo}
                    onChange={this.handleChange}
                    name="panNo"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="accountNo">Account Number</label>
                  <input
                    type="number"
                    id="accountNo"
                    placeholder="Account Number"
                    checked={this.state.accountNo}
                    onChange={this.handleChange}
                    name="accountNo"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="IFSECode">IFSE Code</label>
                  <input
                    type="text"
                    id="IFSECode"
                    placeholder=" IFSE Code"
                    checked={this.state.IFSECode}
                    onChange={this.handleChange}
                    name="IFSECode"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="emergencyContactNo">
                    Emergency ContactNo
                  </label>
                  <input
                    type="number"
                    placeholder="Emergency ContactNo"
                    id="emergencyContactNo"
                    checked={this.state.emergencyContactNo}
                    onChange={this.handleChange}
                    name="emergencyContactNo"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="emergencyContactPersonName">
                    Emergency Person Name
                  </label>
                  <input
                    type="text"
                    id="emergencyContactPersonName"
                    placeholder="Emergency Person Name"
                    checked={this.state.emergencyContactPersonName}
                    onChange={this.handleChange}
                    name="emergencyContactPersonName"
                  />
                </Grid> */}
                {/* <Grid item xs={4}>
                  <label htmlFor="DOB">DOB</label>
                  <input
                    type="date"
                    id="DOB"
                    checked={this.state.DOB}
                    onChange={this.handleChange}
                    name="date"
                  />
                </Grid> */}
                <Grid item xs={8}>
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    placeholder="Salary"
                    id="salary"
                    checked={this.state.salary}
                    onChange={this.handleChange}
                    name="salary"
                  />
                </Grid>
                <Grid item xs={8}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    checked={this.state.date}
                    onChange={this.handleChange}
                    name="date"
                  />
                </Grid>
              </Grid>
            </Box>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default Add;

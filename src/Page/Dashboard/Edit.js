import React from "react";
// import {Box, Grid} form "@mui/material";
// import Swal from 'sweetalert2';
// import { Box, Grid } from "@mui/material";
export default class Edit extends React.Component {
  render(){
    const id=this.props.singleemployee;
    return (
      <>
      <h1>Edit Component</h1>
      {/* <div>
        <h1>{id.firstname}</h1>
      </div> */}
      </>
    )
  }
}
//   state = JSON.parse(localStorage.getItem("formData")) || {
//     employeee: employees,
//     firstName: "",
//     lastName: "",
//     personalEmail: "",
//     salary: "",
//     date: "",
//   };
//    handleUpdate = e => {
//             e.preventDefault();
    
//             if (!firstName || !lastName || !email || !salary || !date) {
//                 return Swal.fire({
//                     icon: 'error',
//                     title: 'Error!',
//                     text: 'All fields are required.',
//                     showConfirmButton: true
//                 });
//             }
    
//             const employee = {
//                 id,
//                 firstName,
//                 lastName,
//                 email,
//                 salary,
//                 date
//             };
    
//             // for (let i = 0; i < employees.length; i++) {
//             //     if (employees[i].id === id) {
//             //         employees.splice(i, 1, employee);
//             //         break;
//             //     }
//             // }
    
//             setEmployees(employees);
//             setIsEditing(false);
    
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Updated!',
//                 text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//         };
//   render() {
//     const id=this.props.singleemployee
//     console.log("employeeee",id)
//     return (
//       <div className="small-container">
//           <h1>ADD EMPLOYEE</h1>
//           <form onSubmit={this.handleSubmit}>
//             <Box sx={{ width: "100%" }}>
//               <Grid
//                 container
//                 rowSpacing={1}
//                 columnSpacing={{ xs: 1, sm: 2, md: 4 }}
//               >
//                 <Grid item xs={8}>
//                   <label htmlFor="firstName">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     onChange={this.handleChange}
//                     name="firstName"
//                     id="firstName"
//                     value={this.state.firstName}
//                   />
//                 </Grid>
//                 <Grid item xs={8}>
//                   <label htmlFor="lastName">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     onChange={this.handleChange}
//                     name="lastName"
//                     value={this.state.lastName}
//                   />
//                 </Grid>
//                 <Grid item xs={8}>
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     placeholder="Personal Email"
//                     onChange={this.handleChange}
//                     name="email"
//                     id="email"
//                     value={this.state.email}
//                   />
//                   </Grid>
//                   <Grid item xs={8}>
//                   <label htmlFor="salary">Salary</label>
//                   <input
//                     type="number"
//                     placeholder="Salary"
//                     id="salary"
//                     checked={this.state.salary}
//                     onChange={this.handleChange}
//                     name="salary"
//                   />
//                 </Grid>
//                 <Grid item xs={8}>
//                   <label htmlFor="date">Date</label>
//                   <input
//                     type="date"
//                     id="date"
//                     checked={this.state.date}
//                     onChange={this.handleChange}
//                     name="date"
//                   />
//                 </Grid>
//               </Grid>
//             </Box>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
      
//     )
//   }
// }
// import React, { useState } from 'react'
// import Swal from 'sweetalert2';

// function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

//     const id = selectedEmployee.id;

//     const [firstName, setFirstName] = useState(selectedEmployee.firstName);
//     const [lastName, setLastName] = useState(selectedEmployee.lastName);
//     const [email, setEmail] = useState(selectedEmployee.email);
//     const [salary, setSalary] = useState(selectedEmployee.salary);
//     const [date, setDate] = useState(selectedEmployee.date);

//     const handleUpdate = e => {
//         e.preventDefault();

//         if (!firstName || !lastName || !email || !salary || !date) {
//             return Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: 'All fields are required.',
//                 showConfirmButton: true
//             });
//         }

//         const employee = {
//             id,
//             firstName,
//             lastName,
//             email,
//             salary,
//             date
//         };

//         for (let i = 0; i < employees.length; i++) {
//             if (employees[i].id === id) {
//                 employees.splice(i, 1, employee);
//                 break;
//             }
//         }

//         setEmployees(employees);
//         setIsEditing(false);

//         Swal.fire({
//             icon: 'success',
//             title: 'Updated!',
//             text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
//             showConfirmButton: false,
//             timer: 1500
//         });
//     };

//     return (
//         <div className="small-container">
//             <form onSubmit={handleUpdate}>
//                 <h1>Edit Employee</h1>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     name="firstName"
//                     value={firstName}
//                     onChange={e => setFirstName(e.target.value)}
//                 />
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                     id="lastName"
//                     type="text"
//                     name="lastName"
//                     value={lastName}
//                     onChange={e => setLastName(e.target.value)}
//                 />
//                 <label htmlFor="email">Email</label>
//                 <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="salary">Salary ($)</label>
//                 <input
//                     id="salary"
//                     type="number"
//                     name="salary"
//                     value={salary}
//                     onChange={e => setSalary(e.target.value)}
//                 />
//                 <label htmlFor="date">Date</label>
//                 <input
//                     id="date"
//                     type="date"
//                     name="date"
//                     value={date}
//                     onChange={e => setDate(e.target.value)}
//                 />
//                 <div style={{ marginTop: '30px' }}>
//                     <input type="submit" value="Update" />
//                     <input
//                         style={{ marginLeft: '12px' }}
//                         className="muted-button"
//                         type="button"
//                         value="Cancel"
//                         onClick={() => setIsEditing(false)}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Edit
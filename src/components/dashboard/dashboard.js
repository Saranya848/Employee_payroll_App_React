import React from "react";
import './dashboard.css';
import profile_1 from '../../assets/profile-images/Ellipse-5.png';
import profile_2 from '../../assets/profile-images/Ellipse-3.png';
import editEmp from '../../assets/icons/create-black-18dp.svg';
import deleteEmp from '../../assets/icons/delete-black-18dp.svg';
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";


function Dashboard() {

    return (
        <>
            <div className="header header-content">
                <div className="logo-content">
                    <img src={logo} className="logo-content-img" alt="logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br/>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header-content employee-header">
                    <div className="emp-detail-text">
                        Employee Details
                        <div className="emp-count">2</div>
                    </div>
                    <Link to="payroll" className="add-button">
                        <img className="add-button" src="../assets/add-24px.svg" alt=""/>Add Employee
                    </Link>

                </div>

                <div className="table-main">
                    <table id="table-display" className="table">
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img className="profile" src={profile_1} alt="profile_img-1"/></td>
                            <td>Saranya</td>
                            <td>Female</td>
                            <td>
                                <div className="dept-label">Sales</div>
                                <div className="dept-label">Finance</div>
                            </td>
                            <td>656000</td>
                            <td>09 May 2020</td>
                            <td>
                                <img src={editEmp} alt="delete" id="1" onClick="remove(this)"/>
                                <img src={deleteEmp} alt="edit" id="1" onClick="update(this)"/>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img className="profile" src={profile_2} alt="profile_img-2"/></td>
                            <td>Harsha</td>
                            <td>Male</td>
                            <td>
                                <div className="dept-label">HR</div>
                                <div className="dept-label">Finance</div>
                            </td>
                            <td>1290000</td>
                            <td>17 April 2018</td>
                            <td>
                                <img src={editEmp} alt="delete" id="1" onClick="remove(this)"/>
                                <img src={deleteEmp} alt="edit" id="1" onClick="update(this)"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Dashboard;

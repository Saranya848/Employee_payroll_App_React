import React from "react";
import './payroll-form.css';
//import path from '../assets/images/logo.png'
//import profile1 from '../assets/profile-images/Ellipse-3.png'
//import profile2 from '../assets/profile-images/Ellipse-1.png'
//import profile3 from '../assets/profile-images/Ellipse-8.png'
//import profile4 from '../assets/profile-images/Ellipse-7.png'

function PayrollForm() {
    return (
    <>
       <div className="logo-content">
           <div>
               <span className="emp-text">EMPLOYEE</span><br/>
               <span className="emp-text emp-payroll">PAYROLL</span>
           </div>
       </div>

       <div className="form-content">
           <form className="form">
               <div className="form-head">Employee Payroll Form</div>
               <div className="row-content">
                   <label htmlFor="name" className="label text">Name</label>
                   <input type="text" name="name" id="name" className="input" placeholder="Your Name ..." pattern="^[A-Z]{1}[a-z]{2,12}$" required />
               </div>

               <div className="row-content">
                   <label className="label text" htmlFor="gender">Gender</label>
                   <div>
                       <input type="radio" id="male" name="gender" value="male" />
                       <label className="text" htmlFor="male">Male</label>
                       <input type="radio" id="female" name="gender" value="female" />
                       <label className="text" htmlFor="female">Female</label>
                   </div>
               </div>

               <div className="row-content">
                   <label className="label text" htmlFor="department">Department</label>
                   <div>
                       <input className="checkbox" type="checkbox" id="hr" name="hr" value="HR" />
                       <label className="text" htmlFor="hr">HR</label>
                       <input className="checkbox" type="checkbox" id="sales" name="sales" value="Sales" />
                       <label className="text" htmlFor="sales">Sales</label>
                       <input className="checkbox" type="checkbox" id="finance" name="finance" value="Finance" />
                       <label className="text" htmlFor="finance">Finance</label>
                       <input className="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer" />
                       <label className="text" htmlFor="engineer">Engineer</label>
                       <input className="checkbox" type="checkbox" id="others" name="others" value="Others" />
                       <label className="text" htmlFor="others">Others</label>
                   </div>
               </div>

               <div className="row-content">
                   <label className="label text" htmlFor="salary">Salary </label>
                   <input className="input" type="text" name="salary" pattern="^[0-9]{1}[1-9]{2,7}$" />          
               </div>

               <div className="row-content">
                   <label className="label text" htmlFor="startDate">Start Date</label>
                   <div>
                       <select id="day" name="Day">
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                           <option value="6">6</option>
                           <option value="7">7</option>
                           <option value="8">8</option>
                           <option value="9">9</option>
                           <option value="10">10</option>
                           <option value="11">11</option>
                           <option value="12">12</option>
                           <option value="13">13</option>
                           <option value="14">14</option>
                           <option value="15">15</option>
                           <option value="16">16</option>
                           <option value="17">17</option>
                           <option value="18">18</option>
                           <option value="19">19</option>
                           <option value="20">20</option>
                           <option value="21">21</option>
                           <option value="22">22</option>
                           <option value="23">23</option>
                           <option value="24">24</option>
                           <option value="25">25</option>
                           <option value="26">26</option>
                           <option value="27">27</option>
                           <option value="28">28</option>
                           <option value="29">29</option>
                           <option value="30">30</option>
                           <option value="31">31</option>
                       </select>
                       <select id="month" name="Month">
                           <option value="0">January</option>
                           <option value="1">February</option>
                           <option value="2">March</option>
                           <option value="3">April</option>
                           <option value="4">May</option>
                           <option value="5">June</option>
                           <option value="6">July</option>
                           <option value="7">August</option>
                           <option value="8">September</option>
                           <option value="9">October</option>
                           <option value="10">November</option>
                           <option value="11">December</option>
                       </select>
                       <select id="year" name="Year">
                           <option value="2021">2021</option>
                           <option value="2020">2020</option>
                           <option value="2019">2019</option>
                           <option value="2018">2018</option>
                           <option value="2017">2017</option>
                           <option value="2016">2016</option>
                       </select>
                   </div>
               </div>

               <div className="row-content">
                   <label className="label text" htmlFor="notes">Notes</label>
                   <textarea id="notes" className="input" name="Notes" placeholder=""></textarea>
               </div>

               <div className="buttonParent">
                   <a href="EmployeePayroll.html" className="resetButton button cancelButton">Cancel</a>
                   <div className="submit-reset">
                       
                       <button type="reset" className="resetButton button" >Reset</button>
                   </div>
               </div>

           </form>
       </div>
    </>
    )
}

export default PayrollForm;
import React from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from 'react-router-dom';
function JobChallans() {
  return (
    <div className="container-fluid h-100"style={{ color: "#272B70",backgroundColor:"white" }} >
    <div className="row p-lg-5 p-md-4 p-sm-4 p-1 my-lg-3 my-md-3 my-sm-3 my-3 py-3 " >
   <div className="col-xxl-4 col-xl-4  col-lg-4 col-md-4 col-sm-4 col-4  saleshead" >
    <h3>Challans</h3>
   </div>
      <div className="col-xxl-4 col-xl-4  col-lg-4 col-md-4 col-sm-4 col-4 ">
        <input
          type="date"
          className="form-control rounded-5 p-2 shadow   "
          placeholder="20/03/2024"
        />
      </div>
      <div className="text-center  col-xxl-4 col-xl-4  col-lg-4 col-md-4 col-sm-4 col-4">
        <NavLink to="/AddChallans" className="btn-sm btn btn-outline-success rounded-4 border border-1">
            <div className=" p-2 fs-6 next-btn">
         Add Challans
            </div>
          </NavLink>
        </div>
      <div className="col-lg-12 col-md-12 col-md-12 col-xs-12 col-12 px-lg-5 px-md-5 px-sm-1 px-1 text-truncate ">
        <div className="shadow p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-lg-5 my-md-5 my-sm-3 my-3 " style={{color:"#9AA0A9", backgroundColor: "white" }}>
          <div className="row justify-content-around text-center ">
            <div className="col">Bill No <ArrowDropDownIcon /></div>
            <div className="col">Party Name <ArrowDropDownIcon /></div>
            <div className="col">GST <ArrowDropDownIcon /></div>
            <div className="col">Date <ArrowDropDownIcon /></div>
            <div className="col">Quantity <ArrowDropDownIcon /></div>
            <div className="col">Print Bill <ArrowDropDownIcon /></div>
          </div>
        </div>

        <div className="shadow col-lg-12 col-md-12 col-md-12 p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-3" style={{ backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">1</div>
            <div className="col">Anne Jacob</div>
            <div className="col">24ASEDSA5588</div>
            <div className="col">10 Sep, 2023</div>
            <div className="col"> 85476</div>
            <div className="col"><button className="btn btn-outline-success rounded-3 btn-sm ps-4 pe-4">Print</button></div>
          </div>
        </div>

        <div className="shadow   rounded-3 my-3 p-lg-5 p-md-4 p-sm-4 p-1" style={{ backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">2</div>
            <div className="col">Bethany Jackson</div>
            <div className="col">24ASEDSA5588</div>
            <div className="col">08 Sep, 2023</div>
            <div className="col"> 85476</div>
            <div className="col"><button className="btn btn-outline-success rounded-3 btn-sm ps-4 pe-4">Print</button></div>
          </div>
        </div>

        <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-3" style={{ backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">3</div>
            <div className="col">James Mullican</div>
            <div className="col">24ASEDSA5588</div>
            <div className="col">06 Sep, 2023</div>
            <div className="col"> 85476</div>
            <div className="col"><button className="btn btn-outline-success rounded-3 ps-4 pe-4 btn-sm">Print</button></div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default JobChallans
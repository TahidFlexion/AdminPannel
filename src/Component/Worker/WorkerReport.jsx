import React from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from 'react-router-dom';


function WorkerReport() {
  return (
    <div className="container-fluid "style={{ color: "#272B70",backgroundColor:"white" }} >
    <div className="row  my-3 mx-sm-0 p-2 p-md-4 p-lg-5" >
      <div className="d-flex justify-content-between  ">
      <div className=" ">
       <h3>Worker Report</h3>
      </div>
      <div className="">
          <NavLink to="/AddWorker" className="btn-sm btn btn-outline-success rounded-4 border border-1">
            <div className=" p-2 fs-6 next-btn">
            Add Work
            </div>
          </NavLink>
        </div>
      </div>

      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-md-12 ">
        <div className="shadow p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-lg-5 my-md-3 my-sm-3 my-3" style={{color:"#9AA0A9", backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">Bill No <ArrowDropDownIcon /></div>
            <div className="col">Name <ArrowDropDownIcon /></div>
            <div className="col">Mo no  <ArrowDropDownIcon /></div>
            <div className="col">Address <ArrowDropDownIcon /></div>
            <div className="col">Salary <ArrowDropDownIcon /></div>
            <div className="col">Date  <ArrowDropDownIcon /></div>
          </div>
        </div>

        <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1  rounded-3 my-3" style={{ backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">1</div>
            <div className="col">Anne Jacob</div>
            <div className="col">8985685657</div>
            <div className="col">Mota Varachha</div>
            <div className="col">7895</div>
            <div className="col"> 26 Jan 24</div>
          </div>
        </div>

        <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1  rounded-3 my-3" style={{ backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">2</div>
            <div className="col">Bethany jackson</div>
            <div className="col">9565235645</div>
            <div className="col">Surat</div>
            <div className="col">8956</div>
            <div className="col"> 06 Jan 24</div>
          </div>
        </div>

        <div className="shadow p-lg-5 p-md-4 p-sm-4 p-1  rounded-3 my-3" style={{ backgroundColor: "white" }}>
          <div className="row justify-content-around text-center">
            <div className="col">3</div>
            <div className="col">James Mullican</div>
            <div className="col">8754663215</div>
            <div className="col">Varachha </div>
            <div className="col">7894</div>
            <div className="col"> 05 Jan 24</div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default WorkerReport
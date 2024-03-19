import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Purchaseinvoice2 from "./Purchaseinvoice2";
import { NavLink } from "react-router-dom";

function Purchaseinvoice() {
  return (
    <div className="container-fluid h-100"style={{ color: "#272B70",backgroundColor:"white" }} >
      <div className="row my-3  p-lg-5 p-md-2 p-sm-2 p-2  " >
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 pt-3 saleshead ">
          <h3 className="">Purchase Invoice</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 pt-3 ">
          <input
            type="date"
            className="form-control rounded-5 p-2 col-lg-w-75 col-md-w-75 col-sm-w-75"
            placeholder="20/03/2024"
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4  pt-3 text-center ">
          <NavLink to="/purchase2" className= "btn-sm btn btn-outline-success rounded-4 border border-1">
            <div className=" p-2 fs-6 next-btn">
           Order Now
            </div>
          </NavLink>
        </div>
        <div className="col-lg-12 col-md-12 col-md-12 col-12  my-lg-5 my-md-4 my-sm-2 my-3 ">
          <div className="shadow p-lg-5 p-md-4 p-sm-4 p-2 rounded-3" style={{ backgroundColor: "white" ,color:"#9AA0A9"}}>
            <div className="row justify-content-around text-center">
              <div className="col">Bill No <ArrowDropDownIcon /></div>
              <div className="col">Party Name <ArrowDropDownIcon /></div>
              <div className="col">GST <ArrowDropDownIcon /></div>
              <div className="col">Date <ArrowDropDownIcon /></div>
              <div className="col">Print Bill <ArrowDropDownIcon /></div>
            </div>
          </div>

          <div className="shadow p-lg-5 p-md-4 p-sm-4 p-2 rounded-3 my-3" style={{ backgroundColor: "white" }}>
            <div className="row justify-content-around text-center">
              <div className="col">1</div>
              <div className="col">Anne Jacob</div>
              <div className="col">24ASEDSA5588</div>
              <div className="col">10 Sep, 2023</div>
              <div className="col"><button className="btn btn-outline-success rounded-3 btn-sm ps-4 pe-4">Print</button></div>
            </div>
          </div>

          <div className="shadow  p-lg-4 p-md-4 p-sm-4 p-2 rounded-3 my-3" style={{ backgroundColor: "white" }}>
            <div className="row p-lg-4 p-md-4 p-sm-4 p-1 justify-content-around text-center">
              <div className="col">2</div>
              <div className="col">Bethany Jackson</div>
              <div className="col">24ASEDSA5588</div>
              <div className="col">08 Sep, 2023</div>
              <div className="col"><button className="btn btn-outline-success rounded-3 btn-sm ps-4 pe-4">Print</button></div>
            </div>
          </div>

          <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-3" style={{ backgroundColor: "white" }}>
            <div className="row justify-content-around text-center">
              <div className="col">3</div>
              <div className="col">James Mullican</div>
              <div className="col">24ASEDSA5588</div>
              <div className="col">06 Sep, 2023</div>
              <div className="col"><button className="btn btn-outline-success rounded-3 ps-4 pe-4 btn-sm">Print</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchaseinvoice;

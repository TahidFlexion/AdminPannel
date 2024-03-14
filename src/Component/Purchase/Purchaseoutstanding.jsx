import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function PurchaseOutstanding() {
  return (
    <div className="container-fluid h-100"style={{ color: "#272B70",backgroundColor:"white" }} >
      <div className="row my-3 mx-sm-0 p-2 p-md-4 p-lg-5  " >
        <div className="col-lg-6 col-md-6 col-sm-6 col-6 pt-3   ">
          <h3>Purchase Outstanding</h3>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end pt-3 ">
          <input
            type="date"
            className="form-control rounded-5 p-2 "style={{maxWidth:"400px"}}
            placeholder="20/03/2024"/>
        </div>
        <div className="col-lg-12 col-md-12 col-md-12 ">
          <div className="shadow p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-lg-5 my-md-3 my-sm-3 my-3" style={{ backgroundColor: "white",color:"#9AA0A9" }}>
            <div className="row justify-content-around text-center">
              <div className="col">Bill No <ArrowDropDownIcon /></div>
              <div className="col">Party Name <ArrowDropDownIcon /></div>
              <div className="col">GST <ArrowDropDownIcon /></div>
              <div className="col">Date <ArrowDropDownIcon /></div>
              <div className="col">bill Amount <ArrowDropDownIcon /></div>
              <div className="col">Print Bill <ArrowDropDownIcon /></div>
            </div>
          </div>

          <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-3" style={{ backgroundColor: "white" }}>
            <div className="row justify-content-around text-center">
              <div className="col">1</div>
              <div className="col">Anne Jacob</div>
              <div className="col">24ASEDSA5588</div>
              <div className="col">10 Sep, 2023</div>
              <div className="col">85476</div>
              <div className="col"><button className="btn btn-outline-success rounded-3 btn-sm ps-4 pe-4">Print</button></div>
            </div>
          </div>

          <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1 rounded-3 my-3" style={{ backgroundColor: "white" }}>
            <div className="row justify-content-around text-center">
              <div className="col">2</div>
              <div className="col">Bethany Jackson</div>
              <div className="col">24ASEDSA5588</div>
              <div className="col">08 Sep, 2023</div>
              <div className="col">85476</div>
              <div className="col"><button className="btn btn-outline-success rounded-3 btn-sm ps-4 pe-4">Print</button></div>
            </div>
          </div>

          <div className="shadow  p-lg-5 p-md-4 p-sm-4 p-1rounded-3 my-3" style={{ backgroundColor: "white" }}>
            <div className="row justify-content-around text-center">
              <div className="col">3</div>
              <div className="col">James Mullican</div>
              <div className="col">24ASEDSA5588</div>
              <div className="col">06 Sep, 2023</div>
              <div className="col">85476</div>
              <div className="col"><button className="btn btn-outline-success rounded-3 ps-4 pe-4 btn-sm">Print</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseOutstanding;

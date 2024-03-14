import React from "react";
import PrintIcon from "@mui/icons-material/Print";

function SaleInvoice2() {
  return (
    <div className="container-fluid py-3  ">
      <div className="row py-5 p-3 px-5 " style={{color:"#272B70",backgroundColor:"white"}}>
        <div className="col-lg-3 col-md-6">
          <div className="invoice-date">
            <label htmlFor="invoice date" className="mb-3">
              Invoice Date
            </label>
            <input type="date" className="form-control p-3 rounded-3" />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 px-3">
          <div className="invoice-No ">
            <label htmlFor="invoice No " className="mb-3">
              Invoice No
            </label>
            <input type="number" className="form-control p-3 rounded-3 " />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="invoice-select ">
            <label htmlFor="select" className="mb-3">
              Party Name
            </label>
            <select
              className="form-select p-3 rounded-3"
              id="inputGroupSelect04"
            >
              <option selected>Riseup Agency</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </div>
        <div className="down py-5 my-3">
          <div className="d-flex justify-content-around align-items-center shadow rounded-5 pt-2 border">
            <p>1</p>
            <p>Item Description</p>
            <p>2</p>
            <p>$50</p>
            <p>$100</p>
          </div>
          <div className="col-lg-3 col-md-12 py-5">
            <div className="invoice-select ">
              <label htmlFor="select" className="mb-3">
                GST(%) :{" "}
              </label>
              <select
                className="form-select p-3 rounded-3"
                id="inputGroupSelect04"
              >
                <option selected></option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>

          <div className="py-5">
            <div className="col-lg-6 mb-3">
              <div className="test d-flex align-items-center">
                <span className="me-5">SubTotal:</span>
                <input type="text" className="form-control w-50 p-2 " />
              </div>
            </div>

            <div className="col-lg-6 mb-3">
              <div className="test d-flex align-items-center">
                <span className="me-3">GST Amount:</span>
                <input type="text" className="form-control w-50 p-2 " />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="test d-flex align-items-center">
                <span className="me-3">Final Amount:</span>
                <input type="text" className="form-control w-50 p-2 " />
              </div>
            </div>

            <div className="Pointer-Icon my-5 bg-light p-2 float-end ">
              <PrintIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleInvoice2;

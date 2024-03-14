import React from 'react';

function Add_Party() {
    return (
        <div className="container-fluid m-lg-2 m-md-2 m-sm-2 m-1 ">
            <div className="row p-lg-5 p-md-5 p-sm-3 p-2" style={{ color: "#272B70", backgroundColor: "white" }}>
                <div className="add-title col-12">
                    <h4 className="py-4 ps-3">Add Party</h4>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 ps-3">
                    <label htmlFor="Owner Name">Owner Name</label>
                    <input type="text" className="form-control p-3 my-3" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 pe-3">
                    <label htmlFor="Party Name">Party Name</label>
                    <input type="text" className="form-control p-3 my-3" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 py-3 ps-3 pe-3">
                    <label htmlFor="Address">Address</label>
                    <textarea className="form-control p-3" rows="3"></textarea>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 py-3 ps-3">
                    <label htmlFor="GST Number">GST Number</label>
                    <input type="text" className="form-control p-3 my-3" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 py-3 pe-3">
                    <label htmlFor="Mobile Number">Mobile Number</label>
                    <input type="text" className="form-control p-3 my-3" />
                </div>
            </div>
        </div>
    );
}

export default Add_Party;

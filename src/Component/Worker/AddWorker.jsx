import React from 'react'

function AddWorker() {
  return (
    <div className="container-fluid m-3">
      <div className="row p-2 my-2" style={{ color: "#272B70", backgroundColor: "white" }}>
        <div className="add-title">
          <h4 className='py-5 ps-2'>Add Worker</h4>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ps-lg-5 pe-lg-3 ps-md-3 pe-md-3 ps-sm-3 pe-sm-3">
          <label htmlFor="Owner Name">Worker Name</label>
          <input type="text" className='form-control p-3 my-3' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ps-lg-3 pe-lg-5 ps-md-3 pe-md-3 ps-sm-3 pe-sm-3">
          <label htmlFor="Party Name">Date Of Joining</label>
          <input type="date" className='form-control p-3 my-3' />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 py-3 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3 ps-sm-3 pe-sm-3">
          <label htmlFor="Party Name">Address</label>
          <textarea type="text" className='form-control my-3 p-4' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 py-3 ps-lg-5 pe-lg-3 ps-md-3 pe-md-3 ps-sm-3 pe-sm-3">
          <label htmlFor="GST Number">Mobile Number</label>
          <input type="text" className='form-control p-3 my-3' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 py-3 ps-lg-3 pe-lg-5 ps-md-3 pe-md-3 ps-sm-3 pe-sm-3">
          <label htmlFor="Mobile Number">Salary</label>
          <input type="text" className='form-control p-3 my-3 ' />
        </div>
      </div>
    </div>
  )
}

export default AddWorker;

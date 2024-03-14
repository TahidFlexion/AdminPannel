import React from 'react'
import { NavLink } from 'react-router-dom'

function AddDesign() {

  return (
    <div className="">
      <div className="row p-5 ms-2 " style={{ color: "#272B70", backgroundColor: "white" }}>
        <div className="d-flex justify-content-between">
        <div className="">
        <h3>Add Design</h3>
        </div>
        <div className="">
          <NavLink to="/AssignDesign" className="btn-sm btn btn-outline-success rounded-4 border border-1">
            <div className=" p-2 fs-6 next-btn">
           Assign Design
            </div>
          </NavLink>
        </div>
        </div>
        <div className="col-lg-6 lg-py-5 md-py-5 sm-py-5 py-0 ">
          <label htmlFor="design-name" className='my-3'>Design-dame</label>
          <input type="text" className='form-control py-3' />
        </div>
        <div className="col-lg-6 lg-py-5 md-py-5 sm-py-5 py-0">
          <label htmlFor="design-name" className='my-3'>Design-dame</label>
          <input type="text" className='form-control py-3' />
        </div>
        <div className="col-md-12 text-center border border-2 rounded-2 m-2 p-5 mt-4">
          <img src="/images/Icons/simple-line-icons_cloud-upload.png" alt="" className='img-fluid' />
          <div className="drop-zone" id="dropZone">
            <input type="file" id="fileInput" className="file-input" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddDesign
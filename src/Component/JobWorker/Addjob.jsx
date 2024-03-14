import React from 'react'

function Addjob() {
  return (
    <div className="container-fluid  m-lg-3 m-md-3 m-sm-3 m-2 ">
    <div className="row p-2" style={{color:"#272B70",backgroundColor:"white"}}>
        <div className="add-title">
    <h4 className=' py-5'>Add Party</h4>
    </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12  ps-lg-5">
            <label htmlFor="Owner Name">Owner Name</label> 
            <input type="text" className='form-control p-3  my-3' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12  pe-lg-5">
            <label htmlFor="Party Name">Party Name</label> 
            <input type="text" className='form-control p-3 my-3' />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 py-3 ps-lg-5 pe-lg-5">
            <label htmlFor="Party Name">Address</label> 
            <textarea type="text" className='form-control my-3 p-4' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12  py-5 ps-lg-5">
            <label htmlFor="GST Number">GST Number</label> 
            <input type="text" className='form-control p-3 my-3' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12  py-5 pe-lg-5">
            <label htmlFor="Mobile Number">Mobile Number</label> 
            <input type="text" className='form-control p-3 my-3 ' />
        </div>
        
        <div>
            </div>
        </div>
    </div>
  )
}

export default Addjob
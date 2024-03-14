import React from 'react'
import PrintIcon from "@mui/icons-material/Print";
import { useNavigate } from 'react-router-dom';


function AddChallans() {
    return (
        <div className="container-fluid" style={{ color: "#272B70",backgroundColor:"white" }}>
            <div className="row my-3 ms-5 ">
                <div className="challans-title my-5 display-6">
                    <h3 className=''>Add challans</h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12  ">
                    <label htmlFor="challans " className='my-3 '>
                        Challans
                    </label>
                    <input type="date" className='form-control p-3 ' />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <label htmlFor="Challans No" className='my-3'>Challans No </label>

                    <input type="number" className='form-control  p-3' />
                </div>
                <div className="col-lg-5 col-md-8 col-sm-12">
                    <label htmlFor="" className='my-3 '>Party Name</label>
                    <select class="form-select  p-3" aria-label="Default select example">
                        <option selected>Riseup Agency</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 py-5">
                    <label htmlFor="Challans No" className='my-3'>Sr No :</label>
                    <input type="number" className='form-control  p-3' />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 py-5  ">
                    <label htmlFor="description" className='my-3'>description </label>
                    <input type="text" className='form-control  p-3' />
                </div>
                <div className="col-lg-5 py-3  ">
                    <label htmlFor="Quantity" className='my-3'>Quantity </label>
                    <input type="text" className='form-control  p-3' />
                </div>
                <div className="col-lg-6 py-3">
                    <label htmlFor="colour" className='my-3'>colour </label>
                    <input type="text" className='form-control  p-3' />
                    <div className="Pointer-Icon my-5  p-2 text-end ">
              <PrintIcon />
            </div>
                </div>
           
            </div>
        </div>
    )
}

export default AddChallans
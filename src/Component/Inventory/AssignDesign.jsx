import React from 'react'

function AssignDesign() {
    return (
        <div className="container-fluid">
            <div className="row p-5 " style={{color:"#272B70",backgroundColor:"white"}}>
                <div className='title py-4' >
                    <h3>Assign Design</h3>
                </div>
                <div className="col-lg-6 ">
                    <label htmlFor="Select Design" className='py-3'>Select Design</label>
                    <select className="form-select  p-3" aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>

                </div>
                <div className="col-lg-6 mb-5">
                        <label htmlfor="Select Design" className=' py-3' >Select Challan</label>
                        <select className="form-select p-3" aria-label="Default select example">
                            <option selected />
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                </div>
            </div>
        </div>
    )
}

export default AssignDesign
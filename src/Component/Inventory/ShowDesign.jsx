import React from 'react'
import AddDesign from './AddDesign'
import { NavLink } from 'react-router-dom'


function ShowDesign() {
    return (
        <>
            <div className="container-fluid ">
                <div className="row my-2 p-lg-5 p-md-5 p-sm-5  " style={{ color: "#272B70", backgroundColor: "white" }}>
                    <div className="d-flex justify-content-between py-3 ">
                        <div>
                            <h3 className=''>Show Design</h3>
                        </div>
                        <div>
                            <div className="">
                                <NavLink to="/AddDesign" className="btn-sm btn btn-outline-success rounded-4 border border-1">
                                    <div className=" p-2 fs-6 next-btn">
                                       Add Design
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center ">
                        <div className="item-img">
                            <img src="/images/iitemimage2.png" alt="" className='img-fluid' />
                        </div>
                        <p>Gucci duffle bag</p>
                        <p>$96</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
                        <div className="item-img">
                            <img src="/images/itemimg1.png" alt="" className='img-fluid' />
                        </div>
                        <p>Gucci duffle bag</p>
                        <p>$96</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
                        <div className="item-img">
                            <img src="/images/itemimg1.png" alt="" className='img-fluid' />
                        </div>
                        <p>Gucci duffle bag</p>
                        <p>$96</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
                        <div className="item-img">
                            <img src="/images/itemimg1.png" alt="" className='img-fluid' />
                        </div>
                        <p>Gucci duffle bag</p>
                        <p>$96</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowDesign
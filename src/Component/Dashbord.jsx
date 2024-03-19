import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink, useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

function Dashbord({menushow,setMenushow}) {
  const [sales, setSales] = useState(false)
  const [purchase, setPurchase] = useState(false)
  const [inventory, setInventory] = useState(false)
  const [job, setJob] = useState(false)
  const navigate=useNavigate()

 function hanldedrop(){
  setMenushow(false)
 }
  function salesto() {
    setSales(!sales)
    setPurchase(false)
    setJob(false)
    setInventory(false)
  }

  function purchaseto() {
    setPurchase(!purchase)
    setSales(false)
    setInventory(false)
    setJob(false)
  }

  function inventoryto() {
    setInventory(!inventory)
    setSales(false)
    setPurchase(false)
    setJob(false)
  }
  
  function jobto() {
    setJob(!job)
    setSales(false)
    setInventory(false)
    setPurchase(false)
    
  }

  return (
    <>
      <div className={`dashbord-menu overflow-auto py-3 p-lg-4 p-md-2 p-sm-2 p-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1  ${menushow && 'd-block h-100'}` }  style={{ height: "90%", position: "fixed", bottom: "0px",left:"0px", backgroundColor: "white" }}>
      <div className=" close-btn float-end  border border-1 p-2 rounded d-lg-none d-md-none d-sm-block" onClick={(()=>setMenushow(false))}>
        <CloseIcon />
          </div> 
           <div className="d-flex py-3 " onClick={()=>navigate("/") }>
          <div className="dashbord-icon "  >
            <GridViewIcon />
          </div>
          <div className="dashbord-title ms-2">
          <a href="">Dashbord</a>
          </div>
          
        </div>
        <div className="d-flex  py-3 "onClick={()=>navigate("/Add_Party")}>
          <div className="dashbord-icon">
            <AddIcon />
          </div>
          <div className="dashbord-title  ms-2 ">
             <a href="">Add Party</a>
          </div>
        </div>
        <div className="d-flex  py-3 " onClick={()=>navigate("/SearchParty")}>
          <div className="dashbord-icon">
            <Search />
          </div>
          <div className="dashbord-title text-truncate ms-2">
            <a href=""> Search Party</a>
          </div>
        </div>
        <div className="d-flex justify-content-between menu-item py-2" onClick={salesto}>
          <div
            className="d-flex" >
            <div className="dashbord-icon">
              <img src="/images/Icons/clarity_date-line.png" alt="" className=" " />
            </div>
              <div className="dashbord-title ms-2">
                <p className="">Sales</p>
                {sales &&
                  <ul className=" me-5 d-inline text-truncate" onClick={hanldedrop}>
                    <li>
                      <NavLink className="drop-item text-truncate" to="/salesinvoice">  Sales Invoice</NavLink>
                    </li>
                    <li>
                      <NavLink to="/salesoutstanding" className="drop-item text-truncate"> Sales Outstanding</NavLink>
                    </li>
                  </ul>
                }
              </div>
          </div>
          <div className="arrow  ps-3">
            <ChevronRightIcon className="arrow"/>
          </div>
        </div>

        <div className="d-flex justify-content-between menu-item py-1" onClick={purchaseto}>
          <div
            className="d-flex ">
            <div className="dashbord-icon">
              <img
                src="/images/Icons/iconoir_chat-lines.png"
                alt=""
                className=" rounded-5 " style={{ backgroundColor: "lightgray" }}
              />
            </div>
            <div className={`dashbord-title  ms-2 ${purchase && 'd-block'}`} >
              <p>Purchase</p>
              {purchase &&
                <ul className=" d-inline me-5 text-truncate" onClick={hanldedrop}>
                  <li>
                    <NavLink className="drop-item text-truncate" to="/purchaseinvoice">  Purchase Invoice</NavLink>

                  </li>
                  <li>
                    <NavLink className="drop-item text-truncate" to="/purchaseoutstanding">Purchase Outstanding</NavLink>


                  </li>
                </ul>
              }
            </div>
          </div>
          <div className="arrow  ps-3">
            <ChevronRightIcon className="arrow" />
          </div>
        </div>


        <div className="d-flex justify-content-between menu-item py-1" onClick={inventoryto}>
          <div
            className="d-flex  " >
            <div className="dashbord-icon">
              <img src="/images/Icons/speed-alt_svgrepo.com.png" alt="" className=" " />
            </div>
            <div className={`dashbord-title ms-2 ${inventory && 'd-block'}`}>
              <p>Inventory</p>
              {inventory &&
                <ul className=" d-inline me-5 text-truncate" onClick={hanldedrop}>
                  <li>
                    <NavLink className="drop-item" to="/Challans">Challans</NavLink>
                  </li>
                  <li >
                    <NavLink className="drop-item" to="/ShowDesign"> Show Design</NavLink>
                  </li>
                </ul>
              }
            </div>
          </div>
          <div className="arrow  ps-3">
            <ChevronRightIcon className="arrow" />
          </div>
        </div>

        <div className="d-flex justify-content-between menu-item py-1" onClick={jobto}>
          <div
            className="d-flex  "

          >
            <div className="dashbord-icon">
              <img src="/images/Icons/ph_shopping-cart-simple.png" alt="" className=" " />
            </div>
            <div className={`dashbord-title ms-2 ${job && 'd-block'}`}>
              <p>Job Worker</p>
              {
                job && <ul className=" me-5 d-inline text-truncate " onClick={hanldedrop}>
                  <li>
                    <NavLink className="drop-item" to="/Addjob">  Add Job Party</NavLink>

                  </li>
                  <li>
                    <NavLink className="drop-item" to="/Jobinvoice">Job Invoice</NavLink>
                  </li>
                  <li>
                    <NavLink className="drop-item" to="/jobreport"> Job Outstanding report</NavLink>
                  </li>
                  <li>
                    <NavLink className="drop-item" to="/jobChallans">Job Challan</NavLink>
                  </li>
                </ul>
              }

            </div>
          </div>
          <div className="arrow ">
            <ChevronRightIcon className="arrow " />
          </div>
        </div>

        <div
          className="d-flex  py-1"
           onClick={(()=>navigate("/WorkerReport"))} >
          <div className="dashbord-icon">
            <img src="images/Icons/fluent_mail-28-regular.png" alt="" className="img-fluid " />
          </div>
          <div className="dashbord-title ms-2">
            <NavLink>Worker</NavLink>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;

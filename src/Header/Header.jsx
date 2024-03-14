import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

function Header({menushow,setMenushow}) {

function topmenu(){
  setMenushow(!menushow)
}
  return (
    <div className={`header fixed-top w-100 ${menushow ?'z-0':''}`} >
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className=" col-lg-4 col-md-6 col-sm-6 col-6 float-end">
          <form className="py-3 ms-4 float-end" >
            <div className="input-group  ">
              <div className="menu-icon py-3 pe-3  d-lg-none d-md-none d-sm-block" onClick={topmenu}>
                <MenuIcon className="fs-2"/>
              </div>
              <input
                className="form-control border-0 p-3 " 
                type="search"
                placeholder="Search here"
                aria-label="Search "
              />
              <span class="input-group-text bg-white border-0 ">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </form>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-6 col-6">
          <div className="user float-end">
            <div className="user-details ">
              <div className="row ">
                <div className="col-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-white dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="me-2 fs-3 display-4">Krish Creation </span>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Avatar"
                        className="rounded-circle"
                        style={{
                          width: 40,
                          height: 40,
                          objectFit: "cover",
                          marginRight: 10,
                        }}
                      />
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="https://via.placeholder.com/150"
                            alt="Avatar"
                            className="rounded-circle"
                            style={{
                              width: 35,
                              height: 35,
                              objectFit: "cover",
                              marginRight: 10,
                            }}
                          />
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="https://via.placeholder.com/150"
                            alt="Avatar"
                            className="rounded-circle"
                            style={{
                              width: 30,
                              height: 30,
                              objectFit: "cover",
                              marginRight: 10,
                            }}
                          />
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="https://via.placeholder.com/150"
                            alt="Avatar"
                            className="rounded-circle"
                            style={{
                              width: 30,
                              height: 30,
                              objectFit: "cover",
                              marginRight: 10,
                            }}
                          />
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

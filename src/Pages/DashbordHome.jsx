import React from "react";
function DashbordHome() {
  return (
    <>
      <div className="container-fluid my-5 mb-5 ">
        <div className="headline ms-3">
          <h3>Hi, John Doe</h3>
        </div>
        <div className="welcome d-grid justify-content-center align-content-center">
          <div className="welcome-image  ">
            <img src="/images/working with laptop computer on desk 1.png" alt="Welcome image" className="img-fluid" />
          </div>
          <div className="title py-5 text-center ">
          <h1>Welcome to ES-1</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordHome;

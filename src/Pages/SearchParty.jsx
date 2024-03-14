import React from 'react';

function SearchParty() {
  return (
    <div className="container mt-lg-5  mt-md-5  mt-sm-5 mt-0 py-lg-3 py-md-3 py-sm-2 py-0    " >
      <div className="row justify-content-center ">
        <div className="col-lg-6 col-md-6 col-sm-12 p-lg-5 p-md-5 p-sm-5 p-5 shadow" style={{ color: "#272B70" }}>
          <h3 className='text-left pb-5'>Search Party</h3>
          <div className="">
            <div className="mb-3">
              <label htmlFor="GSTNumber" className="form-label">
                GST Number
              </label>
              <input type="text" className="form-control p-3" id="GSTNumber" />
            </div>
            <div className="mb-3 ">
              <label htmlFor="PartyName" className="form-label">
                Party Name
              </label>
              <input type="text" className="form-control p-3" id="PartyName" readOnly />
            </div>
            <div className="mb-3 text-center py-4">
              <button className="btn sumbit-btn ">Get Party Name</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchParty;

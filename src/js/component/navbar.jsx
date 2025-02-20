import React from "react";

//create your first component
export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid" style={{ width: "84rem", marginTop: "10px" }}>
                                           {/* website title */}
        <a className="navbar-brand" href="#">Start Bootstrap</a>
                                           {/* right buttons */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse menu" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Services</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};


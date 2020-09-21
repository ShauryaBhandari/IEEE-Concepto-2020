import React from "react";
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-3">
        <a className="navbar-brand" href="#"><img src="./concepto.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Speaker</a>
                </li>
                <li className="nav-item passes">
                    <a className="nav-link" href="#">Get your passes</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
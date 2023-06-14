import "../style/components/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="row align-items-center">
        <div id="blanja-header" className="row align-items-center">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              <Link className="logo col-auto me-4" to={"/"}>
                <img
                  src="/assets/logo_blanja.png"
                  alt="logo-blanja"
                  height={40}
                />
              </Link>
              <div className="main-nav col ms-4">
                <div className="row align-items-center d-flex">
                  <div className="col search">
                    <input
                      type="text"
                      className="form-control decoration-none"
                      placeholder="Search Product"
                    />
                    <FontAwesomeIcon
                      id="ic-search"
                      className="ic"
                      icon="magnifying-glass"
                      size="lg"
                    />
                  </div>
                  <div className="col-auto filters">
                    <FontAwesomeIcon
                      id="ic-filters"
                      className="ic"
                      icon="sliders"
                      size="lg"
                    />
                  </div>
                </div>
              </div>
              <div className="action col-auto">
                <div className="row align-items-center d-flex">
                  <div className="col-auto me-3">
                    <FontAwesomeIcon
                      id="ic-shopping-cart"
                      className="ic"
                      icon="shopping-cart"
                      size="lg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="col-auto btn-login">
                    <Link to='/login'>
                      <button
                        type="button"
                        className="btn btn-primary border-2 rounded-pill"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                  <div className="col-auto btn-regis">
                    <Link to='/register'>
                      <button
                        type="button"
                        className="btn btn-light border-2 border rounded-pill"
                      >
                        Signup
                      </button>
                    </Link>
                  </div>
                  <div className="col-auto d-flex justify-content-between align-items-center menu">
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <FontAwesomeIcon
                        icon="bars"
                        size="lg"
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row collapse justify-content-end text-end"
          id="collapseExample"
        >
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link
                  className="text-black text-decoration-none mb-3 text-center"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  className="text-black text-decoration-none mb-3 text-center"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

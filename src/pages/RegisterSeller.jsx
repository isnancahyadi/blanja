import React from "react";
import "../style/pages/Register.scss";
import { Link } from "react-router-dom";

function RegisterSeller() {
  return (
    <div className="Register">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4 col-xs-12">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="rounded mx-auto d-block mb-4"
            />

            <p className="text-center mb-5">
              <b>Please sign up with your account</b>
            </p>
            <div
              className="btn-group position-relative top-0 start-50 translate-middle mx-auto mt-3"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                onclick="window.location.href ={'register}'"
                name="btnradio"
                id="custommer"
                autocomplete="off"
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                for="custommer"
              >
                Custommer
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="seller"
                autocomplete="off"
                checked
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                for="seller"
              >
                Seller
              </label>
            </div>
            <form>
              <div>
                <label for="name" className="form-label"></label>
                <input
                  type="name"
                  className="form-control form-control-lg"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                />
              </div>

              <div>
                <label for="exampleInputEmail1" className="form-label"></label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="phone_number" className="form-label"></label>
                <input
                  type="number"
                  className="form-control form-control-lg"
                  id="phone_number"
                  placeholder="Phone number"
                />
              </div>

              <div>
                <label for="store_name" className="form-label"></label>
                <input
                  type="store_name"
                  className="form-control form-control-lg"
                  id="store_name"
                  placeholder="Store name"
                />
              </div>

              <div>
                <label
                  for="exampleInputPassword1"
                  className="form-label"
                ></label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="d-grid mt-5">
                <button
                  type="submit"
                  className="btn btn-danger btn-lg rounded-pill"
                >
                  Register
                </button>
              </div>
            </form>

            <small className="d-block text-center text-muted mt-4">
              Already have a account?
              <Link
                className="text-danger text-decoration-none"
                to={"/login-seller"}
              >
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSeller;

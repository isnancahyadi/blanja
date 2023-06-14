import React from "react";
import Navbar from "../../components/Navbar";
import Bv4 from "../../components/Bv4";
import "../../style/pages/Profile.scss"
import Sidebar from "../../components/Sidebar";
function Profile() {
  return (
    <>
      <Bv4 />
      <Navbar />
      <Sidebar />
      <main id="main" className="page-content">
        <div className="container-fluid">
          <h4>My Profile</h4>
          <p>Manage your profile information</p>
          <hr />

         
          <form action="">
            <div className="row mt-4">
              
              <div className="col-md-8 border-right">
                <div className="mb-3 row ">
                  <label for="name" className="col-sm-3 col-form-label">
                    Name
                  </label>
                  <div className="col">
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>

                <div className="mb-3 row ">
                  <label for="email" className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col">
                    <input type="text" className="form-control" id="email" />
                  </div>
                </div>

                <div className="mb-3  row ">
                  <label for="phone_number" className="col-sm-3 col-form-label">
                    Phone number
                  </label>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      id="phone_number"
                    />
                  </div>
                </div>
              </div>

              {/* --batas-- */}

              <div className="col-md-4  btn-label">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    className="img-responsive object-fit-cover rounded-circle"
                    src="/assets/foto-profile.png"
                    height="100"
                    width="100"
                  />
                </div>

              {/* --  input only image  --  */}
                <input type="file" id="upload-image" accept="image/*" />
                <label htmlFor="upload-image" className="mt-3">
                  Select image
                </label>
              </div>

             {/* --Gender-- */}

              <div className="col-md-8 ">
                <div className="mb-3 row ">
                  <label for="radio" className="col-sm-3 col-form-label">
                    Gender
                  </label>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        Laki-laki
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 ">
                <div className="mb-3 row">
                  <label for="date" className="col-sm-3 col-form-label">
                    Date
                  </label>

                  <div className="col-5">
                    <div className="input-group date" id="datepicker">
                      <input type="date" className="form-control" id="date" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary mt-3 ">
              Save
            </button>
          </form> 
        </div>
      </main>
      
    </>
  );
}

export default Profile;

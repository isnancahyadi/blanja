import React from "react";
import Navbar from "../../components/Navbar";
import Bv4 from "../../components/Bv4";

import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

function ShipingAddres() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(Button);
  return (
    <>
      <Bv4 />
      <Navbar />
      <Sidebar />


      <main id="shipping-address" className="page-content ">
        <div className="container-fluid">
          <h4>Choose another address</h4>
          <p>Manage your shipping address</p>
          <hr />

          <div className="shipping-address">
            <button variant="primary" onClick={handleShow}>
              Add new address
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <div className="center">
                  <h4>Add new address</h4>
                </div>
              </Modal.Header>
              <Modal.Body>
                <form action="">
                  {/* ini atas untuk row */}
                  <div className="row">
                    {/* ini dalam untuk row */}
                    <div className="mb-2 ">
                      <label for="allAddress" className="form-label">
                        Save address as (ex : home address, office address)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="allAddress"
                        placeholder="Rumah"
                      />
                    </div>

                    <div className="col-md-6 ">
                      <div className="mb-2 ">
                        <label for="name" className="form-label">
                          Recipient’s name
                        </label>
                        <input type="text" className="form-control" id="name" />
                      </div>

                      <div className="mb-2 ">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          
                        />
                      </div>
                    </div>

                    <div className="mb-2 col-md-6">
                      <label for="telphone_number" className="form-label">
                        Recipient's telephone number
                      </label>
                      <input
                        type="number"
                        className="form-control mb-2"
                        id="telphone_number"
                      />

                      <label for="postal_code" className="form-label">
                        Postal code{" "}
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="postal_code"
                      />
                    </div>

                    <div className="mb-2 col-md-6">
                      <label for="city" className="form-label">
                        City or Subdistrict{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="city"
                      />
                    </div>
                  </div>

                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />

                    <label class="form-check-label" for="exampleCheck1">
                      Make it the primary address
                    </label>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className="btn-cancel" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" className="btn-save" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>


            <div className="box-address mt-3">
<h4 style={{color: "black"}}>
Andreas Jane
</h4>
<p>
Perumahan Sapphire Mediterania, Wiradadi, <span>
Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 </span> 
<span>
[Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
</span>
</p>
<span className="btn btn-change-address">
Change address
</span>
            </div>
       
            
          </div>
        </div>
      </main>
      

    </>
  );
}

export default ShipingAddres;

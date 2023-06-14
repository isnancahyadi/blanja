import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/components/Sidebar.scss";
function Sidebar() {
  return (
    <>
      {/* This is sidebar START */}
      <div className="body-background">
        <div className="header">
          <div className="sidebar">
            <div className="user-picture  mt-5">
              <img
                className="img-responsive object-fit-cover rounded-circle"
                src="/assets/foto-profile.png"
                height="70"
                width="70"
              />
              <div>
                <h5>Name user</h5>
                <FontAwesomeIcon
                  id="ic-pencil"
                  className="ic"
                  icon="pencil"
                  size="lg"
                  style={{ color: "#e5e5e5", marginLeft: "10px" }}
                />
                <Link className="li text-decoration-none" to="/profile">
                  Ubah profile
                </Link>
              </div>
            </div>
            <ul className="mt-5 side-link">
              <li>
                <img src="/assets/user.png" />
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-decoration-none"
                      : isActive
                      ? "side-link-active text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/profile"
                >
                  My account
                </NavLink>
              </li>

              <li>
                <img src="/assets/location.png" />
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-decoration-none"
                      : isActive
                      ? "side-link-active text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/shipping-address"
                >
                  Shiping Address
                </NavLink>
              </li>

              <li>
                <img src="/assets/history.png" />
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-decoration-none"
                      : isActive
                      ? "side-link-active text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/my-order"
                >
                  My order
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* This is sidebar END */}
    </>
  );
}

export default Sidebar;

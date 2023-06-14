import React from 'react'
import Sidebar from '../../components/Sidebar'
import Bv4 from '../../components/Bv4'
import "../../style/pages/Profile.scss"
import Navbar from '../../components/Navbar'
import { NavLink } from 'react-router-dom'

function MyOrder() {
    return (
        <>
        <Bv4/>
  <Navbar />
  < Sidebar />
        
      <main id="my-order" className="page-content ">
        <div className="container-fluid">
          <h4>My order</h4>
        <div className="row mt-3 my-order-nav">
<div className="col-12 text-link text-decoration-none">

{/* 
  className={({ isActive, isPending }) =>
                  isPending
                    ? "text-decoration-none"
                    : isActive
                    ? "side-link-active text-decoration-none"
                    : "text-decoration-none"
                } */}


<NavLink className={({isActive, isPending}) =>
            isPending
            ? " text-decoration-none"
            : isActive
            ? "text-on text-decoration-none"
            : "text-decoration-none"

}  
// ini linknya "/all-items"
to="#"> All items</NavLink>


<NavLink className={({isActive, isPending}) =>
            isPending
            ? " text-decoration-none"
            : isActive
            ? "text-on text-decoration-none"
            : "text-decoration-none"

}   to="/not-yet-paid">Not yet paid</NavLink>

<NavLink className={({isActive, isPending}) =>
            isPending
            ? " text-decoration-none"
            : isActive
            ? "text-on text-decoration-none"
            : "text-decoration-none"

}   to="/Packed">Packed</NavLink>

<NavLink className={({isActive, isPending}) =>
            isPending
            ? " text-decoration-none"
            : isActive
            ? "text-on text-decoration-none"
            : "text-decoration-none"

}   to="/Sent">Sent</NavLink>

<NavLink className={({isActive, isPending}) =>
            isPending
            ? " text-decoration-none"
            : isActive
            ? "text-on text-decoration-none"
            : "text-decoration-none"

}   to="/Completed">Completed</NavLink>

<NavLink className={({isActive, isPending}) =>
            isPending
            ? " text-decoration-none"
            : isActive
            ? "text-on text-decoration-none"
            : "text-decoration-none"

}   to="/order-check">Order cancel</NavLink>















{/* <a className="col-3 text-off" href="#">Packed</a>
<a className="col-3 text-off" href="#">Sent</a>
<a className="col-3 text-off" href="#">Completed</a>
<a className="col-3 text-off" href="#">Order cancel</a> */}
</div>
        </div>
          <hr />

          <div className="my-order">
              
            
          </div>


        </div>
      </main>
        </>
    )
}

export default MyOrder

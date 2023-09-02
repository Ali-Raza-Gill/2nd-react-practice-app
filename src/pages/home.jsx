import React from 'react'
import first from "../Assets/images/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg"
import second from "../Assets/images/brett-jordan-SZ-ZrBKtLRw-unsplash.jpg"
import third from "../Assets/images/deepal-pallav-suthar-TuO1ijJWeR0-unsplash.jpg"
// import fourth from "../Assets/images/4th.avif"
// import fifth from "../Assets/images/5th.avif"

export default function home() {
  return (
    <>
      <div id="carouselExample" className="carousel slide" style={{maxHeight:"600px"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={first} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={second} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={third} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

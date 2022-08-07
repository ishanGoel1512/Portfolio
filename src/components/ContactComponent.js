import React from "react";
import contact from "../assets/contact.jpg"
export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="row pt-5 ">
          <div className="d-flex justify-content-center align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item text-uppercase fw-bold">
                <a className="anchor" href="/">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item active  text-uppercase fw-bold"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="fs-1 fw-bold  "> Contact me !</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <section className="col-6 mb-4">
            <p className="text-center w-responsive mx-auto my-5">
              Do you have any questions? Please do not hesitate to contact me
              directly.
            </p>
            <div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Name"/>
  <label for="floatingPassword">Name</label>
</div>
            <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Subject"/>
  <label for="floatingPassword">Subject</label>
</div>
<div className="form-floating mb-3 ">
  <textarea className="form-control" placeholder="Review" id="floatingTextarea2" style={{height: '100px'}}></textarea>
  <label for="floatingTextarea2">Your Review</label>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-warning text-light">Send Message</button>
  </div>
          </section>
          
          <div className="col-6 pt-5">
            <img src={contact} alt="contact" style={{ width : "700px" , height:"450px"}}/>
            </div>
          </div>
          <div className="row ">
            <div className="w-responsive pt-3">
            </div>
            <ul className="list-unstyled">
                <li><i className="bi bi-geo-alt-fill fs-3"></i>
                    <p>Patiala, India</p>
                </li>

                <li><i className="bi bi-telephone-fill fs-3"></i>
                    <p>+91 9520110160</p>
                </li>

                <li><i className="bi bi-envelope fs-3 mt-4"></i>
                    <p>ishangoel901@gmail.com</p>
                </li>
            </ul>
            </div>
        </div>
    </>
  );
}

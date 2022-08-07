import React from "react";
import portfolio from "../assets/portfolio.png";
import ristorante from "../assets/ristorante.png";
import malware from "../assets/614x300_RiseofDeepLearning.jpg"
export default function Project() {
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
                Projects
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="fs-1 fw-bold  "> Works</div>
          </div>
        </div>
      </div>   
      <div className="container py-5">
        <div className="accordion " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Static Malware Detection System(Deep Learning)
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="card bg-primary text-light mb-3">
                  <img src={malware} className="card-img-top" alt="malware" style={{maxHeight : "250px"}}/>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Malware Detection</h5>
                    <p className="card-text">
                      <ul>
                        <li>A machine learning model to detect a completely unknown
                      malware software.</li>
                      <li>The model learns from old malware
                      binaries and predicts whether the code thrown at it it
                      malicious .or not.</li>
                      <li>Research is also being carried out on
                      the use of various classNameification models for the same, to
                      compare the relative accuracy of each model, on the
                      dataset available.</li>
                      <li>Some of the ML models that are being
                      tested are Auto encoder , ANN ,CNN .</li>
                        </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Ristorante con Fusion(Web Developement)
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="card bg-primary text-light mb-3">
                  <img src={ristorante} className="card-img-top" alt="ristorante" style={{maxHeight : "250px" }} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">A Restaurant Management site</h5>
                    <p className="card-text">
                      <ul>
                        <li>Front End developed
                      using HTML, CSS, JavaScript, and Bootstrap.</li>
                        <li>Server
                      developed using Express, Node.js & Mongo dB.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                My Owm Simple Portfolio Website(Web Developement)
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="card bg-warning text-light mb-3">
                  <img src={portfolio} className="card-img-top" alt="portfolio" style={{maxHeight : "250px"}} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">A Simple Portfolio website</h5>
                    <p className="card-text">
                    <ul>
                    <li> Front End developed
                      using HTML, CSS, JavaScript, and Bootstrap.</li>
                    <li> Server
                      developed using Express, Node.js & Mongo dB.</li>
                    </ul>  
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

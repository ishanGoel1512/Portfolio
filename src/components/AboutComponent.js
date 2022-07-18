import React from 'react';
import myphoto from '../myphoto.jpeg'

const progresStyle = {
  width : '75%'
}
const cardStyle = { 
    width : '70%'
}
export default function About() {
  return( 
    <>
   <div className='container'>
      <div className='row pt-5 '>
      <div className='d-flex justify-content-center align-items-center'>
      <ol class="breadcrumb">
    <li className="breadcrumb-item text-uppercase fw-bold"><a className='anchor' href="/">Home</a></li>
    <li className="breadcrumb-item active  text-uppercase fw-bold" aria-current="page">About</li>
  </ol>
      </div>
      </div>
      <div className='row'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='fs-1 fw-bold  '> Portfolio & Resume</div>
        </div>
      </div>
      </div>
      
      <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='fs-1 fw-bold pb-4'> About me</div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
      <div class="card mb-3 " style={cardStyle}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={myphoto} class="img-fluid rounded-start" alt="myphoto"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-warning text-uppercase py-2 fw-bold">About me ..</h5>
        <h4 class="card-text text-uppercase py-2">A software & web developer based in India</h4>
        <p className='card-text lh-lg fst-italic'>I am a student currently pursuing B.Tech in Thapar University , India. I am passionate about coding and would like to work on different & unique projects .
        As a coder I believe 
        Code can never do anything the developer wants. 
        The code will always be limited by the constraints of the hardware. 
        A good programmer in the one who can see beyond the code, who can see the code interacting with the hardware, 
        who understands that the code is an abstraction; an illusion, 
        and what is real is what happens at the atomic level inside the silicone.</p>
      </div>
    </div>
  </div>
</div>
        </div>
  
      </div>
      <div className='container '>
        <div className='row'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='fs-6 text-warning fw-bold text-uppercase'>Skills</div>
          </div>
          <div className='row'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='fs-2 fw-bold ps-4'>My Skills</div>
        </div>
        </div>
      </div>
      </div>
      <div className='container'>
        <div className='row pt-4'>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>HTML</span>
          <div className="progress">
           <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '80%' }}>80%</div>
          </div>
          </div>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>CSS</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '80%' }}>80%</div>          </div>
          </div>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>Javascript</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '90%' }}>90%</div>          </div>
          </div>
          </div>
          <div className='row pt-4'>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>C++</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '95%' }}>95%</div>          </div>
          </div>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>React</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '90%' }}>90%</div>          </div>
          </div>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>Epxress</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '90%' }}>90%</div>          </div>
          </div>
          </div>
          <div className='row py-4'>
          <div className='col-2 col-md-4'>
          <span className='text-warning fw-bold'>Node.js</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '85%' }}>85%</div>          </div>
          </div>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>MongoDB</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '90%' }}>90%</div>          </div>
          </div>
          <div className='col-12 col-md-4'>
          <span className='text-warning fw-bold'>Bootstrap</span>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-bold" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width : '80%' }}>80%</div>          </div>
          </div>
          </div>
      </div>
      </>
    );
}

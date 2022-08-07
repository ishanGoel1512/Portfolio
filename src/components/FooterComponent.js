import React from 'react';

export default function Footer() {
    return (
        <>
        <div className="footer">
        <div className="container-fluid bg-warning text-light pt-5">
            <div className="row d-flex justify-content-center">               
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/"><i className="bi bi-google" aria-hidden="true"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="bi bi-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="bi bi-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

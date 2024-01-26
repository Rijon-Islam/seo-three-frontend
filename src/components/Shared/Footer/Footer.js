import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  
  
  
  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


 



  const [footerAddress, setFooterAddress] = useState([]);
  


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);





  




  return (


    <>
      
      <div>
        {/* start footer area */}
        <footer className="footer-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 pr-5">
                <div className="footer-widget">

                  <div className="navbar-brand">
                    {
                      logo.map(l => <a href="/">
                        <img src={l.logo} />
                        <img src={l.logo} />
                      </a>)
                    }

                  </div>

                  {
                    footerSocial.map(s => <div className="social-link">

                      <p>{s.aboutText}</p>

                      <a href={s.fblink} className="bg-tertiary" target="_blank"><i className="fab fa-facebook-f" /></a>
                      <a href={s.inslink} className="bg-pink" target="_blank"><i className="fab fa-instagram" /></a>
                    </div>)
                  }

                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 pl-5 align-items-center justify-content-center">
                <div className="footer-widget">
                  <h5>Important Link</h5>
                  <ul className="footer-quick-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                     <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                {
                  footerAddress.map(a => <div className="footer-widget">
                    <h5>Contact info</h5>
                    <div className="contact-info">
                      <i className="envy envy-pin" />
                      {a.footeraddress}
                    </div>
                    <div className="contact-info">
                      <i className="envy envy-call" />
                      <p>
                        {a.footerPhone}
                      </p>
                    </div>
                    <div className="contact-info">
                      <i className="envy envy-plane" />
                      <p>
                        {a.footerEmail}
                      </p>
                    </div>
                  </div>)
                }

              </div>
            </div>
          </div>
        </footer>
        {/* end footer area */}
        {/* start copy right area */}
        <div className="copy-right-area">
          <div className="container">
            {
              footerCopyright.map(c => <div className="copy-right-content">
                <p>
                  {c.copyrightText}
                </p>
              </div>)
            }

          </div>
        </div>
        {/* end copy right area*/}
      </div>


    </>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

    const [action, setAction] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/actions`)
            .then((res) => res.json())
            .then((info) => setAction(info));


    }, []);


    const handleSubscriber = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
    
    
    
    
        const addItem = {
          email,
    
    
    
        };
    
        const url = `http://localhost:5000/add-subscriber`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addItem),
        })
          .then((res) => res.json())
          .then((result) => {
            Navigate('/all-subscriber');
            alert('subscribers is Updated');
          });

        }

    return (
        <>

            {/* {
                action.map(a =>
                    <section className="call-to-action style-two bg-color-secondary">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-7">
                                    <div className="cta-content">
                                        <h2 className="title">{a.heading}</h2>
                                        <p className="subtitle">{a.subHeading}</p>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <p className="cta-note">Get Every Single Updates</p>
                                    <a href={a.buttonLink} className="btn btn-solid bordered-white">{a.buttonText} <i className="far fa-long-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="cta-shape">
                            <img src="assets/img/shape/cta-shape.png" alt="Shape" />
                        </div>
                    </section>)
            } */}

            {
                action.map(a=>  <section className="newsletter-section ptb-100 style-two">
                <div className="container">
                    <div className="section-title title-light">
                        <h2>{a.heading}</h2>
                        <p>{a.subHeading}</p>
                    </div>
                    <form onSubmit={handleSubscriber} className="newsletter-form" data-bs-toggle="validator">
                        <div className="input-group">
                            <input className="form-control" placeholder="E-mail address" type="text" name="email" required autoComplete="off" />
                            <div className="cta-btn">
                                <button className="btn btn-solid" type="submit">
                                    Subscribe
                                    <i className="envy envy-right-arrow" />
                                </button>
                            </div>
                        </div>
                        <div id="validator-newsletter" className="form-result" />
                    </form>
                </div>
            </section>)
            }

           




        </>
    );
};

export default CallToAction;
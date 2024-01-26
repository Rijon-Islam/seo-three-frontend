import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTestimonial = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const [testimonials, settestimonials] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/testimonials`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
        

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            

        };

        const url = `http://localhost:5000/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };





    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;
        


        const stepSection = {
            image,
            
            personName,
            personTitle,
            desc,

        };

        const url = `http://localhost:5000/add-testimonial`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Step Section is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area pt-120 pb-90 fix">
        <div className='mt-5'>
            <div class="container">
                <div class="row">

                </div>
                <div class="row">

                    <div class="col-lg-8 col-md-12">

                        <h3> Update Testimonial Text </h3>
                        {
                            testimonialtext.length === 1 &&
                            <>
                                {testimonialtext.map(text =>
                                    <Link className='btn btn-solid' to={`/testimonialtext-edit/${text._id}`}> Update Now</Link>
                                )}
                            </>
                        }

                        {testimonialtext.length === 0 &&
                            <form class="contact-form " onSubmit={handleTestimonialSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="testimonialText" placeholder=" Testimonial Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                        </div>
                                    </div>

                                    


                                    <div class="slider-btn">
                                        <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                    </div>
                                </div>

                            </form>
                        }





                        <h3> Add Testimonial Item </h3>

                        <form class="contact-form " onSubmit={handleStepSection}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="image" placeholder="Person Image URL" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="personName" placeholder="Person Name" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="personTitle" placeholder="Person Title" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="desc" placeholder="Details" required />
                                    </div>
                                </div>

                                <div class="slider-btn">
                                    <button class="btn btn-solid" data-delay=".8s"> Add Testimonial</button>
                                </div>
                            </div>

                        </form>

                    </div>


                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title center-align text-center mb-50">
                            
                            <h3>Testimonial List</h3>
                        </div>
                    </div>
                </div>
                <div className="row col-lg-6 ">
                {
                testimonials.map(e=> <div className="slider-item">
                <div className="qoute-icon">
                  <img src="assets/img/resource/quotation_1.png" alt="quotation" />
                </div>
                <div className="inner-text">
                  <p>
                  {e.desc}
                  </p>
                </div>
                {/* slider Image */}
                <div className="client">
                <div className="client-info">
                    <h5><Link to={`/edit-testimonial/${e._id}`}>{e.personName}</Link></h5>
                    <span>{e.personTitle}</span>
                  </div>
                  <div className="client-img">
                    <img src={e.image} alt="client-1" />
                  </div>
                  
                </div>
              </div>)
              }
                </div>

            </div>




        </div>
    </section></>
        
    );
};

export default AddTestimonial;
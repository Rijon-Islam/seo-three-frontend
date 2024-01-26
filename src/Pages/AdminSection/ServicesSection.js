import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const servicesubHeading = event.target.servicesubHeading.value;
        const serviceHeading = event.target.serviceHeading.value;


        const serviceSection = {
            servicesubHeading,
            serviceHeading,


        };

        const url = `http://localhost:5000/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {
            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update Service </h2>
                            {
                                service.length === 1 &&
                                <> {
                                    service.map(s => <Link className='btn btn-solid' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)
                                }</>

                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">



                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="servicesubHeading" placeholder="Service Sub Heading" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h2>Add Service</h2>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceIcon" placeholder="Service Icon" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceDetails" placeholder="Service Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>



                        </div>



                        <section className="service-section section-gap bg-color-secondary section-doted-bg mt-5">
                            <div className="">



                                <div className="row pt-70">
                                    {
                                        items.map(c => <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                            <div className="item-single">
                                                <div className="icon">
                                                <i><img src={c.serviceIcon} alt="icon_shape" /></i>
                                                    <div className="icon-bg">
                                                        <img src="assets/img/resource/icon_shape_b1.png" alt="icon_shape" />
                                                    </div>
                                                </div>
                                                <div className="item-content">
                                                    <Link to={`/service-edit/${c._id}`} className='btn btn-primary'>Edit Services</Link>
                                                    <p>{c.serviceDetails}</p>

                                                </div>
                                            </div>

                                        </div>)
                                    }






                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </section>

        </>
    );
};

export default ServicesSection;
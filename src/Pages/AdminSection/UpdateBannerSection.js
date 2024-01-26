import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateBannerSection = () => {

    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerImage = event.target.bannerImage.value;
        const buttonOneText = event.target.buttonOneText.value;
        const buttonOneLink = event.target.buttonOneLink.value;
        const buttonTwoText = event.target.buttonTwoText.value;
        const buttonTwoLink = event.target.buttonTwoLink.value;


        const bannerSection = {
            bannerHeading,
            bannerDetails,
            bannerImage,
            buttonOneText,
            buttonOneLink,
            buttonTwoText,
            buttonTwoLink,

        };

        const url = `http://localhost:5000/update-banner/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
            });
    };



    return (

        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2> Update Banner</h2>



                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerHeading" defaultValue={banner.bannerHeading} placeholder="Banner Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerDetails" defaultValue={banner.bannerDetails} placeholder="Banner Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerImage" defaultValue={banner.bannerImage} placeholder="Banner Image" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonOneText" defaultValue={banner.buttonOneText} placeholder="Button One Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonOneLink" defaultValue={banner.buttonOneLink} placeholder="Button One URL" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonTwoText" defaultValue={banner.buttonTwoText} placeholder="Button Two Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="buttonTwoLink" defaultValue={banner.buttonTwoLink} placeholder="Button Two URL" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s">Update Banner</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default UpdateBannerSection;
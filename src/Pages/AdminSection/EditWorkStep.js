import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditWorkStep = () => {

    const [stepwork, setWork] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/worksec/${id}`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, [stepwork]);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const workTitle = event.target.workTitle.value;
        const stepOne = event.target.stepOne.value;
        const stepTwo = event.target.stepTwo.value;
        const stepThree = event.target.stepThree.value;
        const stepFour = event.target.stepFour.value;
        


        const workSection = {
            workTitle,
            stepOne,
            stepTwo,
            stepThree,
            stepFour

        };

        const url = `http://localhost:5000/update-worksec/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Work Section is Updated');
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
                                <h2> Update Work Step</h2>



                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="workTitle" defaultValue={stepwork.workTitle} placeholder="Section Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepOne" defaultValue={stepwork.stepOne} placeholder="Step One Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepTwo" defaultValue={stepwork.stepTwo} placeholder="Step Two Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepThree" defaultValue={stepwork.stepThree} placeholder="Step Three Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="stepFour" defaultValue={stepwork.stepFour} placeholder="Step Four Text" required />
                                            </div>
                                        </div>
                                        
                                      


                                        <div class="slider-btn">
                                            <button class="btn btn-solid" data-animation="fadeInRight" data-delay=".8s">Update Work section</button>
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

export default EditWorkStep;
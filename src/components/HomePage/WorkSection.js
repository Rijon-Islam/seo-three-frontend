import React, { useEffect, useState } from 'react';

const WorkSection = () => {

    const [stepwork, setWork] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/worksec`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, []);


    return (
        <>

        {
            stepwork.map(e=> <section className="works-section ptb-100 pb-70 bg-white">
            <div className="container">
                <div className="section-title">
                    <h2>{e.workTitle}</h2>
                    
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="work-single">
                            <div className="work-single-content">
                                <i className="envy envy-cloud-computing1" />
                                <h4>{e.stepOne}</h4>
                                <div className="index"><span>1</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="work-single">
                            <div className="work-single-content">
                                <i className="envy envy-code2" />
                                <h4>{e.stepTwo}</h4>
                                <div className="index"><span>2</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="work-single">
                            <div className="work-single-content">
                                <i className="envy envy-global2" />
                                <h4>{e.stepThree}</h4>
                                <div className="index"><span>3</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="work-single">
                            <div className="work-single-content">
                                <i className="envy envy-server" />
                                <h4>{e.stepFour}</h4>
                                <div className="index"><span>4</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> )
        }

            


        </>
    );
};

export default WorkSection;
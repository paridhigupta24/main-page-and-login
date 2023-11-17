import React from 'react';
import Menu from './Menu';

function Contact() {
    return (
        <>
            <div className="wrapper">
                <Menu />


                {/* Page Header Start */}
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Contact Us</h2>
                            </div>
                            <div className="col-12">
                                <a href="/">Home</a>
                                <a href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}

                {/* Contact Start */}
                <div className="contact wow fadeInUp">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Get In Touch</p>
                            <h2>For Any Query</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <i className="flaticon-address"></i>
                                        <div className="contact-text">
                                            <h2>Location</h2>
                                            <p>VIT University, Vellore</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="flaticon-call"></i>
                                        <div className="contact-text">
                                            <h2>Phone</h2>
                                            <p>8439xyz</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="flaticon-send-mail"></i>
                                        <div className="contact-text">
                                            <h2>Email</h2>
                                            <p>xyz@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add the rest of your Contact code here */}
                        </div>
                    </div>
                </div>
                {/* Contact End */}
            </div>
        </>
    );
}

export default Contact;

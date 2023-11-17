import React, { Fragment } from 'react';
import Menu from './Menu';
import Foot from './foot';

function Index() {
    return (
        <>
            <div className="wrapper">

                <Menu />


            </div>


            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + '/assets/img/carousel-1.jpg'} alt="Carousel Image" />

                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Health Care for Good</p>
                            <h1 className="animated fadeInLeft">Today Tomorrow Always</h1>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/assets/img/carousel-2.jpg'} alt="Carousel Image" />

                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Symbol of Your Trust</p>
                            <h1 className="animated fadeInLeft">For x years</h1>
                        </div>
                    </div>


                    <div className="carousel-item">
                        {<img src={process.env.PUBLIC_URL + '/assets/img/carousel-3.jpg'} alt="Carousel Image" />
                        }
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Trusted</p>
                            <h1 className="animated fadeInLeft">For Your Health</h1>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="feature wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Specialities</h3>
                                    <p>Our expertiese in healthcare</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>

                                <div className="feature-text">
                                    <h3>Our Clinics in your city</h3>
                                    <p>Get a quick gist of your health</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>24/7 Support</h3>
                                    <p>Our hospitals are always ready to take care of you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                {<img src={process.env.PUBLIC_URL + '/assets/img/about.jpg'} alt="Image" />
                                }
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Welcome to ABC</p>
                                <h2>x Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur
                                    facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                                    viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur
                                    facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                                    viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur
                                    convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a className="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            \
            <div className="fact">
                <div className="container-fluid">
                    <div className="row counters">
                        <div className="col-md-6 fact-left wow slideInLeft">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">

                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">109</h2>
                                        <p>Expert doctors</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">

                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">485</h2>
                                        <p>Successful Surgeries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fact-right wow slideInRight">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">

                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">1789</h2>
                                        <p>Total Patients cured</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">

                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">02</h2>
                                        <p>Total Hospitals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">
                                    {<img src={process.env.PUBLIC_URL + '/assets/img/service-1.jpg'} alt="Image" />
                                    }
                                    <div className="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
                                            gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Cardiology</h3>
                                    <a className="btn" href="img/service-1.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/service-2.jpg'} alt="Image" style={{ width: '300px', height: '305px' }} />
                                    <div className="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
                                            gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Neurology</h3>
                                    <a className="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="service-img">
                                    {<img src={process.env.PUBLIC_URL + '/assets/img/service-3.jpg'} alt="Image" style={{ width: '300px', height: '305px' }} />}
                                    <div className="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
                                            gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Orthopaedic</h3>
                                    <a className="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    {<img src={process.env.PUBLIC_URL + '/assets/img/service-4.jpg'} alt="Image" style={{ width: '300px', height: '305px' }} />}
                                    <div className="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
                                            gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Gynecology</h3>
                                    <a className="btn" href="img/service-4.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="service-img">
                                    {<img src={process.env.PUBLIC_URL + '/assets/img/service-5.jpg'} alt="Image" style={{ width: '300px', height: '305px' }} />}
                                    <div className="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
                                            gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Dermatology</h3>
                                    <a className="btn" href="img/service-5.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    {<img src={process.env.PUBLIC_URL + '/assets/img/service-6.jpg'} alt="Image" style={{ width: '300px', height: '305px' }} />}
                                    <div className="service-overlay">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
                                            gravida condimentum, viverra quis sem.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Urology</h3>
                                    <a className="btn" href="img/service-6.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Team</p>
                        <h2>Meet Our Doctors</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                    {<img
                                        src={process.env.PUBLIC_URL + '/assets/img/team-1.jpg'}
                                        alt="Team Image"
                                    />}
                                </div>
                                <div className="team-text">
                                    <h2>Cristiano Messi</h2>
                                    <p>CEO and Founder</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                {<img
                                        src={process.env.PUBLIC_URL + '/assets/img/team-2.jpg'}
                                        alt="Team Image"
                                    />}
                                </div>
                                <div className="team-text">
                                    <h2>Eden Salah</h2>
                                    <p>Chief Surgeon</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                {<img
                                        src={process.env.PUBLIC_URL + '/assets/img/team-3.jpg'}
                                        alt="Team Image"
                                    />}
                                </div>
                                <div className="team-text">
                                    <h2>Neymar Santos</h2>
                                    <p>Chief Cardaeologist</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                {<img
                                        src={process.env.PUBLIC_URL + '/assets/img/team-4.jpg'}
                                        alt="Team Image"
                                        style={{ height: '385px' }}
                                    />}
                                </div>
                                <div className="team-text">
                                    <h2>Kevin Ozil</h2>
                                    <p>Chief Dermatologist</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faqs">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Frequently Asked Question</p>
                        <h2>You May Ask</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion-1">
                                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            How do I book an appointment at Apollo Clinic?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Is fasting required for my test?
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            Are all the Doctors available round-the-clock?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            What are the services available in Apollo Clinic?
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                            Do you have the facility of sample pickup for diagnostics?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            What are the working hours? Are you open on Sundays?
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                            Can emergencies be treated at Apollo Clinic?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Do you organise camps?
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                            What are the safety procedures at your hospitals
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Can I get my child over for immunisation?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion-2">
                                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            Are pets allowed?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Is there a seperate place for Maternal stuffs?
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
                                            Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Foot />

        </>
    );
}

export default Index;

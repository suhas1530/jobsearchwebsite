
import { About } from './About'
import { Service } from './Service'
import { Award } from './Award'
import { Feature } from './Feature'
import { Gols } from './Gols'
import { Facts } from './Facts'
import { Price } from './Price'
import { Ctabox } from './Ctabox'
import { Testimonial } from './Testimonial'
import { Faq } from './Faq'
import { Blogs } from './Blogs'
import { FaPaperPlane } from "react-icons/fa";


export const Home = () => {
    return (
        <div className="hero bg-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">

                        <div className="hero-content">

                            <div className="section-title">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">Your Healthcare Recruitment Partner</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">STAFITAL connects healthcare institutions with verified medical, paramedical, and allied professionals through fast, reliable, and compliant staffing solutions.</p>
                            </div>



                            <div className="hero-body wow fadeInUp" data-wow-delay="0.4s">

                                <div className="hero-btn">
                                    <a href="contact.html" className="btn-default btn-highlighted">Requests Staff</a>
                                </div>

                                <div className="video-play-button">
                                    <a
                                        href="https://www.nurs24.com"
                                        className="apply-job-btn"
                                        data-cursor-text="Apply"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaPaperPlane color="#fcde70" size={18} />
                                    </a>
                                    <p>Apply Job through Nurs24.com Job Portal</p>
                                </div>


                            </div>

                            <div className="satisfied-customer-box wow fadeInUp" data-wow-delay="0.6s">

                                <div className="customer-image-content">
                                    <p>Recommended By :</p>
                                </div>

                                <div className="satisfied-customer-images">

                                    <div className="customer-image">
                                        <figure className="image-anime">
                                            <img src="images/customer-img-1.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div className="customer-image">
                                        <figure className="image-anime">
                                            <img src="images/customer-img-2.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div className="customer-image">
                                        <figure className="image-anime">
                                            <img src="images/customer-img-3.jpg" alt="" />
                                        </figure>
                                    </div>

                                    <div className="customer-image">
                                        <figure className="image-anime">
                                            <img src="images/customer-img-4.jpg" alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-5">

                        <div className="hero-image">
                            <img src="images/HealthcareRecruitmentPartner.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className="hero-cta-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-lg-1 order-2">
                                <div className="hero-cta-info">

                                    <div className="hero-cta-item wow fadeInUp">

                                        <div className="hero-cta-item-header">
                                            <div className="icon-box">
                                                <img src="images/icon-contact-now.svg" alt="" />
                                            </div>
                                            <div className="hero-cta-item-title">
                                                <h3>Contact Us</h3>
                                            </div>
                                        </div>

                                        <div className="hero-cta-item-content">
                                            <p><a href="mailto: info@stafital.com"><span>Email:</span>  info@stafital.com</a></p>
                                            <p><a href="mailto:123456789"><span>Phone:</span> (123) 465 - 798</a></p>
                                        </div>

                                    </div>

                                    <div className="hero-cta-item wow fadeInUp" data-wow-delay="0.2s">

                                        <div className="hero-cta-item-header">
                                            <div className="icon-box">
                                                <img src="images/icon-location.svg" alt="" />
                                            </div>
                                            <div className="hero-cta-item-title">
                                                <h3>Our Location</h3>
                                            </div>
                                        </div>



                                        <div className="hero-cta-item-content">
                                            <p>BHIVE Workspace - No.112, AKR Tech Park, "A" and "B" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5 order-lg-2 order-1">

                                <div className="our-expert-box">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.4s">Trusted Healthcare Professionals for Hospitals Nationwide</h2>
                                    <a href="contact.html" className="btn-default btn-highlighted wow fadeInUp" data-wow-delay="0.4s">Request a Staff</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <About />
            <Service />
            <Award />
            <Feature />
            <Gols />
            <Facts />
            <Price />
            <Ctabox />
            <Testimonial />
            <Faq />
            <Blogs />

        </div>



    )
}

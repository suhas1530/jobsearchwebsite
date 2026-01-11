

export const Ctabox = () => {
    return (
        <div>
            <div className="cta-box bg-section dark-section parallaxie">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <div className="cta-box-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">get a quote</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">We're here to solve your <span>staffing challenges</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">Whether you need permanent healthcare staff, temporary workforce, or bulk hiring solutions, we're available to provide fast and reliable staffing support.</p>
                                </div>

                                <div className="cta-box-body wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="cta-box-btn">
                                        <a href="contact.html" className="btn-default">contact us</a>
                                    </div>

                                    <span>or</span>

                                    <div className="contact-now-box">
                                        <div className="icon-box">
                                            <img src="images/icon-phone.svg" alt="" />
                                        </div>
                                        <div className="contact-now-box-content">
                                            <span>Call Us any time</span>
                                            <p><a href="tel:+911234567890">+91 123 456 7890</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-5">
                            <div className="cta-box-image">
                                <img src="images/nurse.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
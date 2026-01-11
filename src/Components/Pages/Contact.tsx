
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
    return (
        <div>
            <div className="page-header bg-section dark-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">Contact us</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="./">home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">contact us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-contact-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-us-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">contact us</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Contact us & <span>let's build your healthcare team!</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">From permanent staffing to contract workforce solutions, our experienced healthcare recruiters provide tailored solutions to meet your staffing needs.</p>
                                </div>

                                <div className="contact-form">
                                    <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="fname" className="form-control" id="fname" placeholder="First name" required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="lname" className="form-control" id="lname" placeholder="Last name" required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone no." required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <input type="email" name="email" className="form-control" id="email" placeholder="E-mail" required />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <select name="service" className="form-control" id="service" required>
                                                    <option value="">Select Service</option>
                                                    <option value="permanent">Permanent Staffing</option>
                                                    <option value="contract">Contract Staffing</option>
                                                    <option value="bulk">Bulk Hiring</option>
                                                    <option value="nursing">Nursing Staffing</option>
                                                    <option value="payroll">Payroll Management</option>
                                                    <option value="other">Other Requirements</option>
                                                </select>
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-md-6 mb-4">
                                                <select name="facility" className="form-control" id="facility" required>
                                                    <option value="">Facility Type</option>
                                                    <option value="hospital">Hospital</option>
                                                    <option value="clinic">Clinic</option>
                                                    <option value="diagnostic">Diagnostic Center</option>
                                                    <option value="nursing_home">Nursing Home</option>
                                                    <option value="corporate">Corporate Healthcare</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group col-md-12 mb-5">
                                                <textarea name="message" className="form-control" id="message" rows={4} placeholder="Tell us about your staffing requirements..."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="col-md-12">
                                                <button type="submit" className="btn-default"><span>submit request</span></button>
                                                <div id="msgSubmit" className="h3 hidden"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="google-map-iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62201.1873993242!2d77.66219155!3d12.999063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae1526dc247ba9%3A0xebdd6b6714bfaabc!2sBHIVE%20Workspace%20-%20No.112%2C%20AKR%20Tech%20Park%2C%20%22A%22%20and%20%22B%22%20Block%2C%207th%20Mile%20Hosur%20Rd%2C%20Krishna%20Reddy%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka%20560068!3m2!1d12.892638999999999!2d77.6417258!5e0!3m2!1sen!2sin!4v1768073137670!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Stafital Location"></iframe>
                            </div>

                            <div className="contact-info-box">
                                <div className="contact-info-item location-item wow fadeInUp">
                                    <div className="contact-info-header">
                                        <div className="icon-box">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="contact-info-title">
                                            <h3>location</h3>
                                        </div>
                                    </div>
                                    <div className="contact-info-content">
                                        <p>BHIVE Workspace - No.112, AKR Tech Park, "A" and "B" Block, 7th Mile Hosur Rd, Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068</p>
                                    </div>
                                </div>

                                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="contact-info-header">
                                        <div className="icon-box">
                                            <FaEnvelope />
                                        </div>
                                        <div className="contact-info-title">
                                            <h3>email</h3>
                                        </div>
                                    </div>
                                    <div className="contact-info-content">
                                        <p><a href="mailto:info@stafital.com">info@stafital.com</a></p>
                                        <p><a href="mailto:support@nurs24.com">support@nurs24.com</a></p>
                                    </div>
                                </div>

                                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="contact-info-header">
                                        <div className="icon-box">
                                            <FaPhone />
                                        </div>
                                        <div className="contact-info-title">
                                            <h3>phone</h3>
                                        </div>
                                    </div>
                                    <div className="contact-info-content">
                                        <p><a href="tel:+911234567890">+91 123 456 7890</a></p>
                                        <p><a href="tel:+911234567891">+91 123 456 7891</a> (NURS24 Support)</p>
                                    </div>
                                </div>

                                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="contact-info-header">
                                        <div className="icon-box">
                                            <FaClock />
                                        </div>
                                        <div className="contact-info-title">
                                            <h3>business hours</h3>
                                        </div>
                                    </div>
                                    <div className="contact-info-content">
                                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                                        <p>Saturday: 10:00 AM - 5:00 PM</p>
                                        <p>Emergency Staffing: 24/7 Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
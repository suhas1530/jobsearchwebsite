
import { FaPlay, FaPhone, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { MdVerified, MdSupportAgent, MdHealthAndSafety, MdGroups, MdWork } from 'react-icons/md'
import { GiHospital } from 'react-icons/gi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { BsPersonCheck } from 'react-icons/bs'

export const AboutUs = () => {
  return (
    <div>
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">About us</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="./">home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">about us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us page-about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-images">
                <div className="about-experience-box wow fadeInUp">
                  <div className="icon-box">
                    <MdHealthAndSafety size={40} />
                  </div>
                  <div className="about-experience-content">
                    <h3><span className="counter">8</span>+ Years Of Excellence</h3>
                    <p>Trusted healthcare staffing experts with 8+ years of experience.</p>
                  </div>
                </div>

                <div className="about-video-image wow fadeInUp" data-wow-delay="0.2s">
                  <img src="images/Paramedical.png" alt="Healthcare Team" />
                  <div className="video-play-button btn-effect">
                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                      <FaPlay />
                    </a>
                  </div>
                </div>

                <div className="about-image">
                  <img src="images/ReliableHealthcare.png" alt="Medical Professionals" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Complete healthcare staffing solutions for <span>every need</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">STAFITAL and NURS24.com are part of KAAMAN TECHNO GLOBAL SERVICES PVT LTD, offering specialized healthcare recruitment solutions across India.</p>
                </div>

                <div className="about-content-body wow fadeInUp" data-wow-delay="0.4s">
                  <div className="about-service-item">
                    <div className="icon-box">
                      <MdVerified size={40} />
                    </div>
                    <div className="about-service-item-content">
                      <h3>Verified Healthcare Professionals</h3>
                      <p>All candidates come from our verified Nurs24 database with complete background checks.</p>
                    </div>
                  </div>

                  <div className="about-service-item">
                    <div className="icon-box">
                      <MdSupportAgent size={40} />
                    </div>
                    <div className="about-service-item-content">
                      <h3>24/7 Recruitment Support</h3>
                      <p>Round-the-clock support for all your urgent staffing needs and emergencies.</p>
                    </div>
                  </div>
                </div>

                <div className="about-content-btn wow fadeInUp" data-wow-delay="0.6s">
                  <a href="contact.html" className="btn-default">contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-approach bg-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-approach-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">our approach</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Empowering healthcare institutions with <span>reliable staffing solutions</span></h2>
                </div>

                <div className="mission-vision-box-list">
                  <div className="mission-vision-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="mission-vision-header">
                      <div className="icon-box">
                        <GiHospital size={40} />
                      </div>
                      <div className="mission-vision-title">
                        <h3>Our mission</h3>
                      </div>
                    </div>
                    <div className="mission-vision-body">
                      <p>To provide end-to-end healthcare staffing solutions that ensure healthcare institutions operate seamlessly while maintaining excellence in patient care.</p>
                    </div>
                  </div>

                  <div className="mission-vision-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="mission-vision-header">
                      <div className="icon-box">
                        <MdGroups size={40} />
                      </div>
                      <div className="mission-vision-title">
                        <h3>Our vision</h3>
                      </div>
                    </div>
                    <div className="mission-vision-body">
                      <p>To be India's most trusted healthcare staffing partner, known for speed, compliance, and reliability in deploying the right professionals at the right time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-approach-images">
                <div className="approach-img-1">
                  <img src="images/medicalstaff05.png" alt="Hospital Staffing" />
                </div>

                <div className="approach-img-2">
                  <img src="images/medicalstaff04.png" alt="Medical Team" />
                  <div className="contact-now-circle">
                    <a href="contact.html"><img src="images/contact-now-circle.png" alt="Contact" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trusted-expert">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="trusted-expert-images">
                <div className="trusted-expert-image">
                  <img src="images/medi2.png" alt="Healthcare Recruitment" />
                </div>

                <div className="exprience-box">
                  <h3>2016 from our journey</h3>
                  <p>Since</p>
                </div>

                <div className="project-complete-list">
                  <div className="project-complete-item">
                    <BsPersonCheck size={40} />
                    <h2><span className="counter">5000</span>+</h2>
                    <p>Professionals Placed</p>
                  </div>

                  <div className="project-complete-item">
                    <GiHospital size={40} />
                    <h2><span className="counter">200</span>+</h2>
                    <p>Hospital Partners</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="trusted-expert-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Who we are</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Trusted experts in healthcare <span>staffing</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">STAFITAL delivers end-to-end staffing for hospitals, clinics, diagnostic centers, and healthcare groups, providing verified medical, paramedical, allied health, and administrative professionals.</p>
                </div>

                <div className="trusted-expert-list wow fadeInUp" data-wow-delay="0.4s">
                  <ul>
                    <li>Committed to delivering reliable and efficient staffing solutions.</li>
                    <li>Backed by years of expertise in healthcare recruitment.</li>
                    <li>Focused on technology-driven approach and client satisfaction.</li>
                  </ul>
                </div>

                <div className="trusted-expert-body wow fadeInUp" data-wow-delay="0.6s">
                  <div className="trusted-expert-item">
                    <div className="icon-box">
                      <HiOutlineClipboardCheck size={40} />
                    </div>
                    <div className="trusted-expert-title">
                      <h3>Comprehensive staffing solutions for all needs</h3>
                    </div>
                  </div>

                  <div className="trusted-expert-item">
                    <div className="icon-box">
                      <MdWork size={40} />
                    </div>
                    <div className="trusted-expert-title">
                      <h3>Flexible permanent, contract & bulk hiring</h3>
                    </div>
                  </div>
                </div>

                <div className="trusted-expert-footer wow fadeInUp" data-wow-delay="0.8s">
                  <div className="trusted-expert-btn">
                    <a href="projects.html" className="btn-default">know more</a>
                  </div>

                  <div className="contact-now-box">
                    <div className="icon-box">
                      <FaPhone />
                    </div>
                    <div className="contact-now-box-content">
                      <span>Call Us 24/7</span>
                      <p><a href="tel:+911234567890">+91 123 456 7890</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-facts bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-facts-box">
                <div className="our-facts-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">get a quote</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">Hassle-free staffing solutions just a <span>click away</span></h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Our goal is to be a leader in providing specialized healthcare staffing services. We focus on quality, compliance, and timely delivery.</p>
                  </div>

                  <div className="our-facts-list wow fadeInUp" data-wow-delay="0.4s">
                    <ul>
                      <li>Verified & Pre-screened Healthcare Professionals</li>
                      <li>Quick Turnaround & On-time Placements</li>
                      <li>Compliance & Documentation Support</li>
                    </ul>
                  </div>
                </div>

                <div className="our-facts-image">
                  <img src="images/nurse.png" alt="Staffing Solutions" />
                  <div className="contact-now-circle">
                    <a href="contact.html"><img src="images/contact-now-circle.png" alt="Contact" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="facts-counter-box">
                <div className="facts-counter-item">
                  <BsPersonCheck size={40} />
                  <h2><span className="counter">5000</span>+</h2>
                  <p>Healthcare Professionals Placed</p>
                </div>

                <div className="facts-counter-item">
                  <GiHospital size={40} />
                  <h2><span className="counter">200</span>+</h2>
                  <p>Hospital & Clinic Partners</p>
                </div>

                <div className="facts-counter-item">
                  <MdVerified size={40} />
                  <h2><span className="counter">95</span>%</h2>
                  <p>Client Satisfaction Rate</p>
                </div>

                <div className="facts-counter-item">
                  <MdSupportAgent size={40} />
                  <h2><span className="counter">48</span> Hours</h2>
                  <p>Average Time to Shortlist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-image">
                <img src="images/medicalstaff06.png" alt="Healthcare Recruitment" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Powering healthcare excellence through <span>quality staffing</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">NURS24.com, our nurse-only online platform, focuses exclusively on connecting hospitals and healthcare institutions with qualified nurses quickly and efficiently.</p>
                </div>

                <div className="why-choose-body wow fadeInUp" data-wow-delay="0.4s">
                  <ul>
                    <li>Committed to delivering safe and efficient healthcare staffing.</li>
                    <li>Backed by technology-driven approach and professional excellence.</li>
                  </ul>
                </div>

                <div className="why-choose-button wow fadeInUp" data-wow-delay="0.6s">
                  <a href="projects.html" className="btn-default">View our services</a>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="why-choose-list wow fadeInUp" data-wow-delay="0.8s">
                <div className="why-choose-item">
                  <div className="icon-box">
                    <MdVerified size={40} />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Delivering reliable staffing</h3>
                    <p>Verified professionals ensuring quality and compliance in every placement.</p>
                  </div>
                </div>

                <div className="why-choose-item active">
                  <div className="icon-box">
                  <MdSupportAgent size={40} color="#1b4b36" />

                  </div>
                  <div className="why-choose-item-content">
                    <h3>Commitment to excellence</h3>
                    <p>24/7 support and flexible staffing models for healthcare institutions.</p>
                  </div>
                </div>

                <div className="why-choose-item">
                  <div className="icon-box">
                    <GiHospital size={40} color="#1b4b36"/>
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Your trusted partner</h3>
                    <p>End-to-end solutions from doctors to support staff with complete documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      <FaPhone />
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
                <img src="images/nurse.png" alt="Healthcare Staffing" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">Join our team</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Join us in building a healthier <span>future together</span></h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp">
                <div className="team-image">
                  <a href="team-single.html" data-cursor-text="View">
                    <img src="images/medicalstaf02.png" alt="Recruitment Manager" />
                  </a>
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3><a href="team-single.html">Priya Sharma</a></h3>
                  <p>Healthcare Recruitment Head</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="team-image">
                  <a href="team-single.html" data-cursor-text="View">
                    <img src="images/medicalstaf01.png" alt="HR Specialist" />
                  </a>
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3><a href="team-single.html">Rajesh Kumar</a></h3>
                  <p>Hospital Relations Manager</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="team-image">
                  <a href="team-single.html" data-cursor-text="View">
                    <img src="images/medicalstaff04.png" alt="Nursing Specialist" />
                  </a>
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3><a href="team-single.html">Anita Reddy</a></h3>
                  <p>Nursing Recruitment Lead</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="team-image">
                  <a href="team-single.html" data-cursor-text="View">
                    <img src="images/medicalstaf03.png" alt="Compliance Officer" />
                  </a>
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebookF /></a></li>
                      <li><a href="#"><FaLinkedinIn /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3><a href="team-single.html">Vikram Patel</a></h3>
                  <p>Compliance & Verification Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="company-values bg-section dark-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="company-values-images">
                <div className="company-values-image-1">
                  <img src="images/medi.png" alt="Healthcare Values" />
                  <div className="contact-now-circle">
                    <a href="contact.html"><img src="images/contact-now-circle.png" alt="Contact" /></a>
                  </div>
                </div>

                <div className="company-values-image-2">
                  <img src="images/medicalstaff04.png" alt="Medical Staffing" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="company-values-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Our Core Values</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Guiding principles behind our <span>excellence</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Together, STAFITAL and NURS24.com provide a comprehensive, technology-driven approach to healthcare staffing, ensuring the right professionals are deployed at the right time with speed, compliance, and reliability.</p>
                </div>

                <div className="company-values-counters">
                  <div className="values-counter-item">
                    <h2><span className="counter">5000</span>+</h2>
                    <p>Professionals Placed</p>
                  </div>

                  <div className="values-counter-item">
                    <h2><span className="counter">200</span>+</h2>
                    <p>Healthcare Partners</p>
                  </div>

                  <div className="values-counter-item">
                    <h2><span className="counter">95</span>%</h2>
                    <p>Satisfaction Rate</p>
                  </div>

                  <div className="values-counter-item">
                    <h2><span className="counter">48</span> Hours</h2>
                    <p>Average Shortlist Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our-testimonial-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">testimonials</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Testimonials that reflect our <span>consistent excellence</span></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">The feedback from our hospital partners speaks volumes about the quality of our staffing services. Read how we've helped them build reliable healthcare teams.</p>
                </div>

                <div className="testimonial-content-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="testimonials.html" className="btn-default">view all testimonials</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-quote">
                          <img src="images/testimonial-quote.svg" alt="Quote" />
                        </div>

                        <div className="testimonial-content">
                          <p>Stafital provided us with highly qualified nursing staff for our ICU within 72 hours during a critical shortage. Their candidates were pre-screened, documentation was complete, and the replacement guarantee gave us peace of mind.</p>
                        </div>

                        <div className="testimonial-body">
                          <div className="author-image">
                            <img src="images/author-1.jpg" alt="Dr. Priya Sharma" />
                          </div>
                          <div className="author-content">
                            <h3>Dr. Priya Sharma</h3>
                            <span>Medical Superintendent, City Hospital</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-quote">
                          <img src="images/testimonial-quote.svg" alt="Quote" />
                        </div>

                        <div className="testimonial-content">
                          <p>We partnered with Stafital for our bulk hiring needs across 5 new clinics. Their retainer model saved us 30% on hiring costs, and the dedicated account manager made coordination seamless.</p>
                        </div>

                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="images/author-2.jpg" alt="Rajesh Kumar" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>Rajesh Kumar</h3>
                            <span>HR Director, MediCare Chain</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev"></div>
                    <div className="testimonial-button-next"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testimonial-company-slider">
                <div className="testimonial-company-slider-text">
                  <p>We're Trusted by more than <span className="counter">200</span>+ healthcare facilities</p>
                </div>
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="company-logo">
                        <GiHospital size={60} />
                      </div>
                    </div>
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
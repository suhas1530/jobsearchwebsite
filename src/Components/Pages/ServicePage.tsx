
import { FaUserMd, FaBriefcaseMedical, FaHospital, FaUsers, FaFileContract, FaClipboardList } from 'react-icons/fa'
import {  MdSupportAgent, MdVerified } from 'react-icons/md'
import { GiHospital } from 'react-icons/gi'
import { BsPersonCheck } from 'react-icons/bs'

export const ServicePage = () => {
  return (
    <div>
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">Our services</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="./">home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/medicalstaf01.png" alt="Permanent Staffing"/>
                    </figure>
                  </a>
                </div>
                
                <div className="service-no">
                  <FaUserMd size={30} />
                </div>
             
                <div className="service-content">
                  <h3><a href="service-single.html">Permanent Staffing</a></h3>
                  <p>Direct hiring with 8-12% of Annual CTC or fixed price for junior roles. 60-day replacement guarantee included.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/medicalstaf02.png" alt="Contract Staffing"/>
                    </figure>
                  </a>
                </div>
              
                <div className="service-no">
                  <FaBriefcaseMedical size={30} />
                </div>
              
                <div className="service-content">
                  <h3><a href="service-single.html">Contract Staffing</a></h3>
                  <p>Temporary workforce with 15-20% of monthly salary. Payroll management and HR support included.</p>
                </div>
              </div> 
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/medicalstaf03.png" alt="Bulk Hiring"/>
                    </figure>
                  </a>
                </div>
                
                <div className="service-no">
                  <FaUsers size={30} />
                </div>
               
                <div className="service-content">
                  <h3><a href="service-single.html">Bulk Hiring</a></h3>
                  <p>Hospital tie-up plans with retainer or volume-based pricing for multiple position requirements.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/medicalstaff04.png" alt="Nursing Staffing"/>
                    </figure>
                  </a>
                </div>
               
                <div className="service-no">
                  <FaHospital size={30} />
                </div>
              
                <div className="service-content">
                  <h3><a href="service-single.html">Nursing Staffing</a></h3>
                  <p>Exclusive nurse recruitment through NURS24.com platform for hospitals and healthcare institutions.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/medicalstaff05.png" alt="Payroll Management"/>
                    </figure>
                  </a>
                </div>
              
                <div className="service-no">
                  <FaFileContract size={30} />
                </div>
                
                <div className="service-content">
                  <h3><a href="service-single.html">Payroll Management</a></h3>
                  <p>Complete payroll processing, salary disbursement, PF/ESI compliance for contract staff.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="1s">
                <div className="service-image">
                  <a href="service-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="images/medicalstaff06.png" alt="Verification Services"/>
                    </figure>
                  </a>
                </div>
               
                <div className="service-no">
                  <FaClipboardList size={30} />
                </div>
                
                <div className="service-content">
                  <h3><a href="service-single.html">Verification Services</a></h3>
                  <p>Complete background checks, document verification and credential validation for all healthcare professionals.</p>
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
                  <figure>
                    <img src="images/person.png" alt="Healthcare Staffing"/>
                  </figure>

                  <div className="contact-now-circle">
                    <a href="contact.html"><img src="images/contact-now-circle.png" alt="Contact"/></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="facts-counter-box">
                <div className="facts-counter-item">
                  <BsPersonCheck size={40} />
                  <h2><span className="counter">5000</span>+</h2>
                  <p>Professionals Placed</p>
                </div>
               
                <div className="facts-counter-item">
                  <GiHospital size={40} />
                  <h2><span className="counter">200</span>+</h2>
                  <p>Hospital Partners</p>
                </div>
               
                <div className="facts-counter-item">
                  <MdVerified size={40} />
                  <h2><span className="counter">95</span>%</h2>
                  <p>Client Satisfaction</p>
                </div>

                <div className="facts-counter-item">
                  <MdSupportAgent size={40} />
                  <h2><span className="counter">48</span> Hours</h2>
                  <p>Avg. Shortlist Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
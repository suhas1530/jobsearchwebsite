
import { FaPhone } from 'react-icons/fa'
import { MdVerified, MdSupportAgent } from 'react-icons/md'
// import { GiHospital } from 'react-icons/gi'

export const OurPages = () => {
  return (
    <div>
      <div className="page-header bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">Permanent Staffing</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="./">home</a></li>
                    <li className="breadcrumb-item"><a href="services.html">services</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Permanent Staffing</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="service-category-list wow fadeInUp">
                  <h3>Our Staffing Services</h3>
                  <ul>
                    <li><a href="service-single.html">Permanent Staffing</a></li>
                    <li><a href="service-single.html">Contract Staffing</a></li>
                    <li><a href="service-single.html">Bulk Hiring</a></li>
                    <li><a href="service-single.html">Nursing Staffing</a></li>
                    <li><a href="service-single.html">Payroll Management</a></li>
                    <li><a href="service-single.html">Verification Services</a></li>
                  </ul>
                </div>

                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                  <div className="sidebar-cta-content">
                    <h3>Need healthcare staff urgently?</h3>
                    <p>Get qualified professionals within 48-72 hours with our verified database.</p>
                  </div>
                 
                  <div className="sidebar-cta-contact">
                    <div className="icon-box">
                      <FaPhone />
                    </div>
                    <div className="sidebar-contact-content">
                      <h3>call us now</h3>
                      <p><a href="tel:+911234567890">+91 123 456 7890</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="page-single-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="images/kaman.png" alt="Healthcare Team"/>
                      </div>
                     
                      <div className="swiper-slide">
                        <img src="images/medicalstaf02.png" alt="Medical Professionals"/>
                      </div>
                     
                      <div className="swiper-slide">
                        <img src="images/medicalstaff05.png" alt="Hospital Staff"/>
                      </div>
                    </div>
                    <div className="page-single-pagination"></div>
                  </div>
                </div>
               
                <div className="service-entry">
                  <p className="wow fadeInUp">At Stafital, we specialize in delivering top-notch permanent staffing solutions tailored to meet the unique needs of hospitals, clinics, diagnostic centers, and healthcare groups. Our team of recruitment professionals is equipped to handle everything from single position hiring to bulk recruitment, ensuring quality, compliance, and reliability at every step. With years of experience in healthcare staffing, we take pride in offering services that adhere to the highest standards of quality and industry compliance.</p>
                  
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Whether it's recruiting specialized doctors, experienced nurses, or skilled paramedical staff, we've got you covered. We work closely with healthcare institutions to provide customized staffing solutions that suit their requirements and budgets. Our commitment to excellence, timely placements, and attention to detail makes us the preferred choice for all your healthcare staffing needs. Trust us to build your healthcare team with expertise and care!</p>
                 
                  <div className="service-working-box">
                    <h2 className="text-anime-style-2">Our Permanent Staffing <span>Process</span></h2>
                    <ul className="wow fadeInUp" data-wow-delay="0.4s">
                      <li>Requirement analysis and detailed role mapping</li>
                      <li>Candidate sourcing from verified Nurs24 database</li>
                      <li>Comprehensive screening and background verification</li>
                      <li>Interview coordination and selection support</li>
                      <li>Documentation and onboarding assistance</li>
                    </ul>
                    
                    <p className="wow fadeInUp" data-wow-delay="0.6s">Choosing our permanent staffing service means ensuring quality, reliability, and professional expertise. Our team of skilled recruiters is committed to delivering high-quality healthcare professionals who meet your specific requirements and contribute to excellent patient care.</p>

                    <div className="working-box-list wow fadeInUp" data-wow-delay="0.8s">
                      <div className="working-box-item">
                        <div className="icon-box">
                          <MdVerified size={40} />
                        </div>
                        <div className="working-box-content">
                          <h3>Verified Professionals</h3>
                          <p>All candidates come from our verified database with complete background checks, ensuring quality and reliability.</p>
                        </div>
                      </div>
                     
                      <div className="working-box-item">
                        <div className="icon-box">
                          <MdSupportAgent size={40} />
                        </div>
                        <div className="working-box-content">
                          <h3>60-Day Replacement Guarantee</h3>
                          <p>Free replacement within 60 days if the candidate resigns or doesn't join, ensuring your investment is protected.</p>
                        </div>
                      </div>
                    </div>

                    <div className="section-footer-text wow fadeInUp" data-wow-delay="1s">
                      <p>Let's build your healthcare team together. <a href="contact.html">Get free quote</a></p>
                    </div>
                  </div>
                 
                  <div className="service-why-choose">
                    <h2 className="text-anime-style-2">Why choose <span>Permanent Staffing</span></h2>
                    <p className="wow fadeInUp">We are committed to delivering reliable and innovative staffing solutions that prioritize quality and long-term stability. From single position hiring to complete team building, we ensure the right professionals are placed in the right roles.</p>

                    <div className="service-why-choose-body wow fadeInUp" data-wow-delay="0.2s">
                      <p>Our permanent staffing service offers flexible pricing models - 8-12% of Annual CTC for standard positions or fixed pricing of ₹10,000 - ₹15,000 for junior roles. With our 60-day replacement guarantee and access to the verified Nurs24 database, you get quality candidates with complete peace of mind.</p>
                    </div>
                  
                    <div className="service-entry-image-content">
                      <div className="service-entry-item">
                        <div className="service-entry-image">
                          <img src="images/medicalstaff04.png" alt="Healthcare Recruitment"/>
                        </div>
                        <div className="service-entry-content wow fadeInUp" data-wow-delay="0.4s">
                          <p>We provide end-to-end staffing solutions for healthcare institutions, ensuring all positions from doctors to support staff are filled with qualified professionals.</p>
                        </div>
                      </div>
                     
                      <div className="service-entry-item">
                        <div className="service-entry-image">
                          <img src="images/medicalstaff06.png" alt="Medical Staff Placement"/>
                        </div>
                        <div className="service-entry-content wow fadeInUp" data-wow-delay="0.4s">
                          <p>Our transparent pricing and replacement guarantee ensure you get value for your investment with complete compliance and documentation support.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="page-single-faqs">
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">Common questions about <span>Permanent Staffing</span></h2>
                  </div>
                 
                  <div className="faq-accordion" id="faqaccordion">
                    <div className="accordion-item wow fadeInUp">
                      <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                          Q1. What is your pricing for permanent staffing?
                        </button>
                      </h2>
                      <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                          <p>We offer two pricing models: 8-12% of Annual CTC for standard positions, or fixed pricing of ₹10,000 - ₹15,000 for junior roles. For bulk hiring, we offer retainer models with reduced per-hire fees.</p>
                        </div>
                      </div>
                    </div>
                   
                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                      <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                          Q2. How quickly can you provide candidates?
                        </button>
                      </h2>
                      <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                          <p>We provide shortlisted profiles within 48-72 hours for standard requirements. For urgent needs, we can expedite the process to 24 hours with our priority hiring service.</p>
                        </div>
                      </div>
                    </div>
                  
                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                      <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                          Q3. What is your replacement guarantee?
                        </button>
                      </h2>
                      <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                          <p>We offer free replacement within 60 days if the candidate resigns or doesn't join after accepting the offer. This applies to all our permanent staffing placements.</p>
                        </div>
                      </div>
                    </div>
                 
                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                      <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                          Q4. Do you handle documentation and verification?
                        </button>
                      </h2>
                      <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                          <p>Yes, we provide complete document and credential verification for all candidates. Our team handles all necessary documentation, background checks, and onboarding support.</p>
                        </div>
                      </div>
                    </div>
                   
                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                      <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                          Q5. Can you handle bulk hiring for multiple positions?
                        </button>
                      </h2>
                      <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                        <div className="accordion-body">
                          <p>Absolutely! We specialize in bulk hiring through our Hospital Tie-Up Plan. We offer retainer models, volume-based pricing, and dedicated account managers for multiple position requirements.</p>
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
    </div>
  )
}
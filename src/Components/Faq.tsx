

export const Faq = () => {
    return (
        <div>
            <div className="our-faqs bg-section">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">frequently asked questions</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Common questions about our <span>staffing services</span></h2>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                                <p>The feedback from our hospital partners speaks volumes about the quality of our staffing services. Here are answers to common queries about our healthcare staffing solutions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faqs-image">
                                <img src="./images/kaman.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="faq-accordion" id="accordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            Q1. What types of healthcare professionals do you recruit?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>We specialize in recruiting all categories of healthcare professionals including Doctors, Nurses (RNs, LPNs, Staff Nurses), Paramedics, Medical Technicians, Hospital Administrators, and Support Staff. All candidates come from our verified Nurs24 database with complete background checks.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Q2. How quickly can you provide shortlisted candidates?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <p>For standard positions, we provide shortlisted profiles within 48-72 hours. For emergency requirements, we can expedite this to 24 hours. Our priority hiring service under the retainer model ensures even faster turnaround times with dedicated account management.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                Q3. What is your replacement guarantee policy?
                                            </button>
                                        </h2>
                                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>We offer free replacement within 60 days if the candidate resigns or doesn't join after accepting the offer. This applies to all our permanent staffing plans and ensures you get reliable, long-term placements without additional costs.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                        <h2 className="accordion-header" id="heading4">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                Q4. How does the contract staffing payroll model work?
                                            </button>
                                        </h2>
                                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>In our contract staffing model, staff remain on Stafital's payroll while working at your facility. You manage attendance and share monthly reports. We handle salary payments, PF/ESI compliance, and provide single consolidated invoices. This reduces your HR burden while maintaining workforce control.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                        <h2 className="accordion-header" id="heading5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                Q5. Can you handle bulk hiring for new hospital projects?
                                            </button>
                                        </h2>
                                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we specialize in bulk hiring through our Hospital Tie-Up Plan. We offer retainer models and volume-based pricing with dedicated account managers. We've successfully staffed multiple new hospitals and clinics, providing complete workforce solutions from doctors to support staff with compliance and documentation support.</p>
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
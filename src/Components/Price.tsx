// import React from 'react'

// export const Price = () => {
//     return (
//         <div>



//             <>


//                 <div className="our-pricing">
//                     <div className="container">
//                         <div className="row section-row align-items-center">
//                             <div className="col-lg-12">

//                                 <div className="section-title section-title-center">
//                                     <h3 className="wow fadeInUp">our pricing</h3>
//                                     <h2 className="text-anime-style-2" data-cursor="-opaque">High-quality electrical services without breaking <span>the bank</span></h2>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className="row">
//                             <div className="col-lg-12">

//                                 <div className="our-pricing-box tab-content wow fadeInUp" data-wow-delay="0.2s" id="TabContent">

//                                     <div className="our-pricing-nav">
//                                         <ul className="nav nav-tabs" id="MyTab" role="tablist">
//                                             <li className="nav-item" role="presentation">
//                                                 <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-selected="false">monthly</button>
//                                             </li>
//                                             <li className="nav-item" role="presentation">
//                                                 <button className="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" type="button" role="tab" aria-selected="true">yearly</button>
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <div className="pricing-tab-item tab-pane fade show active" id="monthly" role="tabpanel">
//                                         <div className="row align-items-center">
//                                             <div className="col-lg-4 col-md-6">

//                                                 <div className="pricing-item wow fadeInUp">

//                                                     <div className="pricing-header">
//                                                         <h3>Basic Package</h3>
//                                                         <p>Perfect for homeowners or small businesses needing occasional.</p>
//                                                     </div>

//                                                     <div className="pricing-price">
//                                                         <h2>$19.99<sub>/per month</sub></h2>
//                                                     </div>

//                                                     <div className="pricing-list">
//                                                         <ul>
//                                                             <li>Electrical system inspection</li>
//                                                             <li>Minor repairs (up to 2 hours)</li>
//                                                             <li>Priority scheduling</li>
//                                                             <li>24/7 support hotline</li>
//                                                         </ul>
//                                                     </div>

//                                                     <div className="pricing-btn">
//                                                         <a href="contact.html" className="btn-default">get started</a>
//                                                     </div>

//                                                 </div>

//                                             </div>

//                                             <div className="col-lg-4 col-md-6">

//                                                 <div className="pricing-item highlighted-box wow fadeInUp">

//                                                     <div className="pricing-header">
//                                                         <h3>Standard Plan</h3>
//                                                         <p>Ideal for those who require more frequent maintenance and energy.</p>
//                                                     </div>

//                                                     <div className="pricing-price">
//                                                         <h2>$119.99<sub>/per month</sub></h2>
//                                                     </div>

//                                                     <div className="pricing-list">
//                                                         <ul>
//                                                             <li>Everything in the Basic Plan</li>
//                                                             <li>Electrical panel maintenance</li>
//                                                             <li>Installation of standard fixtures</li>
//                                                             <li>Energy-saving consultation</li>
//                                                         </ul>
//                                                     </div>

//                                                     <div className="pricing-btn">
//                                                         <a href="contact.html" className="btn-default btn-highlighted">get started</a>
//                                                     </div>

//                                                 </div>

//                                             </div>

//                                             <div className="col-lg-4 col-md-6">

//                                                 <div className="pricing-item wow fadeInUp">

//                                                     <div className="pricing-header">
//                                                         <h3>Premium Plan</h3>
//                                                         <p>Designed for large project or business with ongoing electrical ned.</p>
//                                                     </div>


//                                                     <div className="pricing-price">
//                                                         <h2>$299.99<sub>/per month</sub></h2>
//                                                     </div>

//                                                     <div className="pricing-list">
//                                                         <ul>
//                                                             <li>Everything in the Standard Plan</li>
//                                                             <li>Full electrical system audit</li>
//                                                             <li>Unlimited repairs & installations</li>
//                                                             <li>Emergency response within 1 hour</li>
//                                                         </ul>
//                                                     </div>

//                                                     <div className="pricing-btn">
//                                                         <a href="contact.html" className="btn-default">get started</a>
//                                                     </div>

//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="pricing-tab-item tab-pane fade" id="yearly" role="tabpanel">
//                                         <div className="row align-items-center">
//                                             <div className="col-lg-4 col-md-6">

//                                                 <div className="pricing-item">

//                                                     <div className="pricing-header">
//                                                         <h3>Basic Package</h3>
//                                                         <p>Perfect for homeowners or small businesses needing occasional.</p>
//                                                     </div>

//                                                     <div className="pricing-price">
//                                                         <h2>$119.99<sub>/per yearly</sub></h2>
//                                                     </div>

//                                                     <div className="pricing-list">
//                                                         <ul>
//                                                             <li>Electrical system inspection</li>
//                                                             <li>Minor repairs (up to 2 hours)</li>
//                                                             <li>Priority scheduling</li>
//                                                             <li>24/7 support hotline</li>
//                                                         </ul>
//                                                     </div>

//                                                     <div className="pricing-btn">
//                                                         <a href="contact.html" className="btn-default">get started</a>
//                                                     </div>

//                                                 </div>

//                                             </div>

//                                             <div className="col-lg-4 col-md-6">

//                                                 <div className="pricing-item highlighted-box">

//                                                     <div className="pricing-header">
//                                                         <h3>Standard Plan</h3>
//                                                         <p>Ideal for those who require more frequent maintenance and energy.</p>
//                                                     </div>

//                                                     <div className="pricing-price">
//                                                         <h2>$1119.99<sub>/per yearly</sub></h2>
//                                                     </div>

//                                                     <div className="pricing-list">
//                                                         <ul>
//                                                             <li>Everything in the Basic Plan</li>
//                                                             <li>Electrical panel maintenance</li>
//                                                             <li>Installation of standard fixtures</li>
//                                                             <li>Energy-saving consultation</li>
//                                                         </ul>
//                                                     </div>

//                                                     <div className="pricing-btn">
//                                                         <a href="contact.html" className="btn-default btn-highlighted">get started</a>
//                                                     </div>

//                                                 </div>

//                                             </div>

//                                             <div className="col-lg-4 col-md-6">

//                                                 <div className="pricing-item">

//                                                     <div className="pricing-header">
//                                                         <h3>Premium Plan</h3>
//                                                         <p>Designed for large project or business with ongoing electrical ned.</p>
//                                                     </div>

//                                                     <div className="pricing-price">
//                                                         <h2>$2299.99<sub>/per yearly</sub></h2>
//                                                     </div>

//                                                     <div className="pricing-list">
//                                                         <ul>
//                                                             <li>Everything in the Standard Plan</li>
//                                                             <li>Full electrical system audit</li>
//                                                             <li>Unlimited repairs & installations</li>
//                                                             <li>Emergency response within 1 hour</li>
//                                                         </ul>
//                                                     </div>

//                                                     <div className="pricing-btn">
//                                                         <a href="contact.html" className="btn-default">get started</a>
//                                                     </div>

//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="col-lg-12">

//                                         <div className="pricing-benefit-list">
//                                             <ul>
//                                                 <li><img src="images/icon-pricing-benefit-1.svg" alt="" />Get 30 day free trial</li>
//                                                 <li><img src="images/icon-pricing-benefit-2.svg" alt="" />No any hidden fees pay</li>
//                                                 <li><img src="images/icon-pricing-benefit-3.svg" alt="" />You can cancel anytime</li>
//                                             </ul>
//                                         </div>

//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </>


//         </div>
//     )
// }





export const Price = () => {
    return (
        <div>
            <div className="our-pricing">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title section-title-center">
                                <h3 className="wow fadeInUp">our pricing plans</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">High-quality healthcare staffing solutions without breaking <span>the bank</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="our-pricing-box tab-content wow fadeInUp" data-wow-delay="0.2s" id="TabContent">
                                <div className="our-pricing-nav">
                                    <ul className="nav nav-tabs" id="MyTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="permanent-tab" data-bs-toggle="tab" data-bs-target="#permanent" type="button" role="tab" aria-selected="false">Permanent Staffing</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="contract-tab" data-bs-toggle="tab" data-bs-target="#contract" type="button" role="tab" aria-selected="true">Contract Staffing</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="bulk-tab" data-bs-toggle="tab" data-bs-target="#bulk" type="button" role="tab" aria-selected="true">Bulk Hiring</button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Permanent Staffing Tab */}
                                <div className="pricing-tab-item tab-pane fade show active" id="permanent" role="tabpanel">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item wow fadeInUp">
                                                <div className="pricing-header">
                                                    <h3>Direct Hiring</h3>
                                                    <p>One-time placement for permanent positions with replacement guarantee.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>8% - 12%<sub>/of Annual CTC</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Requirement analysis & role mapping</li>
                                                        <li>Shortlisted profiles in 48-72 hours</li>
                                                        <li>Interview coordination & support</li>
                                                        <li>Document verification & onboarding</li>
                                                        <li>Free replacement within 60 days</li>
                                                        <li>Fixed price option for junior roles</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default">get started</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item highlighted-box wow fadeInUp">
                                                <div className="pricing-header">
                                                    <h3>Junior Role Fixed Price</h3>
                                                    <p>Cost-effective fixed pricing for junior healthcare positions.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>₹10K - ₹15K<sub>/one-time fee</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Same quality screening process</li>
                                                        <li>Fast-track hiring for junior roles</li>
                                                        <li>Complete documentation support</li>
                                                        <li>Replacement guarantee included</li>
                                                        <li>Transparent pricing - no hidden costs</li>
                                                        <li>Access to verified Nurs24 database</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default btn-highlighted">get started</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item wow fadeInUp">
                                                <div className="pricing-header">
                                                    <h3>Payment Terms</h3>
                                                    <p>Clear and structured payment schedule for permanent staffing.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>50% + 50%<sub>/payment plan</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>50% advance after requirement confirmation</li>
                                                        <li>50% before or on candidate onboarding</li>
                                                        <li>Pay only when you hire</li>
                                                        <li>No hidden charges or extra fees</li>
                                                        <li>Faster hiring than traditional agencies</li>
                                                        <li>Single vendor for healthcare staffing</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default">get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contract Staffing Tab */}
                                <div className="pricing-tab-item tab-pane fade" id="contract" role="tabpanel">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item">
                                                <div className="pricing-header">
                                                    <h3>Temporary Staffing</h3>
                                                    <p>Payroll & workforce control model for contract healthcare staff.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>15% - 20%<sub>/of monthly salary</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Monthly billing cycle</li>
                                                        <li>Payroll processing & salary disbursement</li>
                                                        <li>Single consolidated invoice</li>
                                                        <li>Replacement for absenteeism/exits</li>
                                                        <li>Workforce discipline & control</li>
                                                        <li>PF/ESI compliance (if applicable)</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default">get started</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item highlighted-box">
                                                <div className="pricing-header">
                                                    <h3>Client Benefits</h3>
                                                    <p>Staff under Stafital payroll with reduced HR burden.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>Full Control<sub>/workforce management</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Staff under Stafital payroll & control</li>
                                                        <li>Reduced HR & administrative burden</li>
                                                        <li>Better staff discipline & accountability</li>
                                                        <li>Easy scale up/down of workforce</li>
                                                        <li>Single vendor for staffing + payroll</li>
                                                        <li>Timely salary payments to candidates</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default btn-highlighted">get started</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item">
                                                <div className="pricing-header">
                                                    <h3>Attendance & Payroll</h3>
                                                    <p>Streamlined process for attendance management and payroll.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>Monthly<sub>/billing cycle</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Attendance managed by Client</li>
                                                        <li>Monthly attendance report sharing</li>
                                                        <li>Salary paid by Kaaman Techno Global</li>
                                                        <li>Invoice based on actual attendance</li>
                                                        <li>Central HR & payroll desk support</li>
                                                        <li>Grievance handling & HR support</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default">get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bulk Hiring Tab */}
                                <div className="pricing-tab-item tab-pane fade" id="bulk" role="tabpanel">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item">
                                                <div className="pricing-header">
                                                    <h3>Retainer Model</h3>
                                                    <p>Long-term partnership with priority hiring and dedicated support.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>₹25K - ₹75K<sub>/monthly retainer</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Monthly retainer based on requirements</li>
                                                        <li>Reduced hiring fee per position</li>
                                                        <li>Priority hiring from Nurs24 database</li>
                                                        <li>Dedicated Account Manager (SPOC)</li>
                                                        <li>Faster SLA-based turnaround time</li>
                                                        <li>Regular hiring status reports</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default">get started</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item highlighted-box">
                                                <div className="pricing-header">
                                                    <h3>Volume-Based Pricing</h3>
                                                    <p>Cost-effective bulk hiring with slab-based discounts.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>5% - 7%<sub>/of Annual CTC</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Lower percentage per hire</li>
                                                        <li>Slab-based volume discounts</li>
                                                        <li>Quarterly performance reviews</li>
                                                        <li>Strategic workforce planning</li>
                                                        <li>Centralized HR & payroll support</li>
                                                        <li>Regular hiring pipeline management</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default btn-highlighted">get started</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-item">
                                                <div className="pricing-header">
                                                    <h3>Dedicated Support</h3>
                                                    <p>Comprehensive support system for hospital tie-ups.</p>
                                                </div>
                                                
                                                <div className="pricing-price">
                                                    <h2>Single Point<sub>/of contact</sub></h2>
                                                </div>
                                                
                                                <div className="pricing-list">
                                                    <ul>
                                                        <li>Dedicated Account Manager</li>
                                                        <li>Single Point of Contact (SPOC)</li>
                                                        <li>Priority hiring queue access</li>
                                                        <li>Monthly/quarterly hiring reports</li>
                                                        <li>Long-term workforce stability</li>
                                                        <li>One trusted partner for all needs</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="pricing-btn">
                                                    <a href="contact.html" className="btn-default">get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="pricing-benefit-list">
                                        <ul>
                                            <li><img src="images/icon-pricing-benefit-1.svg" alt="" />Transparent pricing - no hidden costs</li>
                                            <li><img src="images/icon-pricing-benefit-2.svg" alt="" />Replacement guarantee on all plans</li>
                                            <li><img src="images/icon-pricing-benefit-3.svg" alt="" />Access to verified Nurs24 database</li>
                                        </ul>
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

import { Swiper, SwiperSlide } from 'swiper/react';


// ✅ Correct import for Pagination module in Swiper 10+
import { Pagination } from 'swiper/modules';

export const Service = () => {
  const services = [
    {
      no: '01',
      title: 'Medical Recruitment',
      desc: 'Providing verified doctors, specialists, and consultants for permanent or contract positions. Fast hiring for hospitals, clinics, and multispecialty centers.',
      img: 'images/medicalstaf01.png'
    },
    {
      no: '02',
      title: 'Paramedical & Allied Health Staffing',
      desc: 'Skilled lab technicians, radiology staff, physiotherapists, dialysis & OT professionals—all screened and ready to support your facility.',
      img: 'images/medicalstaf02.png'
    },
    {
      no: '03',
      title: 'Hospital Administration Staffing',
      desc: 'Efficient front-office executives, HR, billing, coding, and quality coordinators to keep your hospital operations seamless.',
      img: 'images/medicalstaf03.png'
    },
  ];

  return (
    <div className="our-services bg-section dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Services</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Connecting Hospitals with the Right Professionals, <span> Right on Time.</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.no}>
                  <div className="service-item">
                    <div className="service-image">
                      <a href="service-single.html" data-cursor-text="View">
                        <figure className="image-anime">
                          <img src={service.img} alt={service.title} />
                        </figure>
                      </a>
                    </div>

                    <div className="service-no">
                      <h2>{service.no}</h2>
                    </div>

                    <div className="service-content">
                      <h3>
                        <a href="service-single.html">{service.title}</a>
                      </h3>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
              <p>
                Skilled talent. Fast. Reliable. Compliant <a href="contact.html">Apply Job Today!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

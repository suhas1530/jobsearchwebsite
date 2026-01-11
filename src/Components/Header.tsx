
// import { FaInstagram, FaFacebookF, FaDribbble } from "react-icons/fa";

// export const Header = () => {
//     return (
//         <>
//             <div className="topbar">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-md-9">

//                             <div className="topbar-contact-info">
//                                 <ul>
//                                     <li><img src="images/icon-location.svg" alt="" />BHIVE Workspace - No.112, AKR Tech Park, Bengaluru, Karnataka 560068</li>
//                                     <li><a href="mailto: info@stafital.com"><img src="images/icon-mail.svg" alt="" /> info@stafital.com</a></li>
//                                 </ul>
//                             </div>

//                         </div>

//                         <div className="col-md-3">

//                             <div className="topbar-social-links">
//                                 <ul className="social-icons">
//                                     <li>
//                                         <a href="https://www.instagram.com/nurs24.comindia?igsh=MWZjM3l1enRsemhqbg%3D%3D">
//                                             <FaInstagram color="#1b4b36" size={18} />
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="https://www.facebook.com/profile.php?id=61581688584868&rdid=lfaswrecnKKa8inM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZVTvxwCJr%2F">
//                                             <FaFacebookF color="#1b4b36" size={18} />
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="nurs24.com">
//                                             <FaDribbble color="#1b4b36" size={18} />
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>




//             <header className="main-header">
//                 <div className="header-sticky">
//                     <nav className="navbar navbar-expand-lg">
//                         <div className="container">
//                             {/* Logo Start */}
//                             <a className="navbar-brand" href="./">
//                                 <img src="images/logo.svg" alt="Logo" />
//                             </a>
//                             {/* Logo End */}

//                             {/* Main Menu Start */}
//                             <div className="collapse navbar-collapse main-menu">
//                                 <div className="nav-menu-wrapper">
//                                     <ul className="navbar-nav mr-auto" id="menu">
//                                         <li className="nav-item submenud"><a className="nav-link" href="./">Home</a>
                                        
//                                         </li>
//                                         <li className="nav-item"><a className="nav-link" href="/aboutus">About Us</a>
//                                         </li><li className="nav-item"><a className="nav-link" href="/servicepage">Services</a></li>
//                                         <li className="nav-item"><a className="nav-link" href="/Blogs">Our Blogs</a></li>
                                       
                                      
                                        
//                                         <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
//                                     </ul>
//                                 </div>


//                                 <div className="header-contact-btn">
//                                     <a href="tel:123456789" className="header-contact-now"><img src="images/icon-phone.svg" alt="" />(123) 456 - 789</a>
//                                     <a href="contact.html" className="btn-default">Request a Staff</a>
//                                 </div>

//                             </div>
//                             {/* Main Menu End */}

//                             <div className="navbar-toggle">
//                                 <a href="#" className="slicknav_btn slicknav_collapsed">
//                                     <span className="slicknav_menutxt"></span>
//                                     <span className="slicknav_icon slicknav_no-text">
//                                         <span className="slicknav_icon-bar"></span>
//                                         <span className="slicknav_icon-bar"></span>
//                                         <span className="slicknav_icon-bar"></span>
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </header>


//         </>

//     )
// }



import { useState } from "react";
import { FaInstagram, FaFacebookF, FaDribbble, FaTimes, FaBars } from "react-icons/fa";
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div className="topbar-contact-info">
                <ul>
                  <li><img src="images/icon-location.svg" alt="" />BHIVE Workspace - No.112, AKR Tech Park, Bengaluru, Karnataka 560068</li>
                  <li><a href="mailto: info@stafital.com"><img src="images/icon-mail.svg" alt="" /> info@stafital.com</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="topbar-social-links">
                <ul className="social-icons">
                  <li>
                    <a href="https://www.instagram.com/nurs24.comindia?igsh=MWZjM3l1enRsemhqbg%3D%3D">
                      <FaInstagram color="#1b4b36" size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61581688584868&rdid=lfaswrecnKKa8inM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZVTvxwCJr%2F">
                      <FaFacebookF color="#1b4b36" size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="nurs24.com">
                      <FaDribbble color="#1b4b36" size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo */}
              <a className="logob" href="./">
                <img src="images/logo.png" alt="Logo" />
              </a>

              {/* Mobile Hamburger Menu Button */}
              <button 
                className="navbar-toggle d-lg-none"
                type="button" 
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>

              {/* Main Menu */}
              <div className={`collapse navbar-collapse main-menu ${isMenuOpen ? 'show' : ''}`}>
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item" onClick={closeMenu}>
                      <a className="nav-link" href="./">Home</a>
                    </li>
                    <li className="nav-item" onClick={closeMenu}>
                      <a className="nav-link" href="/aboutus">About Us</a>
                    </li>
                    <li className="nav-item" onClick={closeMenu}>
                      <a className="nav-link" href="/servicepage">Services</a>
                    </li>
                    <li className="nav-item" onClick={closeMenu}>
                      <a className="nav-link" href="/Blogs">Our Blogs</a>
                    </li>
                    <li className="nav-item" onClick={closeMenu}>
                      <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>

                <div className="header-contact-btn">
                  <a href="tel:123456789" className="header-contact-now">
                    <img src="images/icon-phone.svg" alt="" />(123) 456 - 789
                  </a>
                  <a href="contact.html" className="btn-default" onClick={closeMenu}>
                    Request a Staff
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay d-lg-none"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;
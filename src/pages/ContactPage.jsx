// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Home/Header';
// import Footer from '../Home/Footer';
// import '../style/ContactPage.css';
// import { Facebook, Twitter, Instagram } from 'lucide-react';
// import { FaPinterest } from 'react-icons/fa';

// export default function ContactPage() {
//   return (
//     <div className="contact-page">
//       <Header />

//       {/* Hero / breadcrumb */}
//       <section className="contact-hero">
//         <div className="container">
//           <h1 className="contact-hero__title">Contact Us</h1>
//           <nav className="contact-hero__breadcrumb">
//             <Link to="/">Home</Link>
//             <span>/</span>
//             <span>Contact Us</span>
//           </nav>
//         </div>
//       </section>

//       {/* Main section: form on the left, info on the right */}
//       <main className="contact-main container">
//         <section className="contact-grid">

//              {/* → RIGHT: the “Talk with our team” info */}
//           <div className="contact-info-block">
//             <p className="pretitle">Talk with our team</p>
//             <h2 className="info-title">
//               Any Question?<br />
//               Feel Free to Contact
//             </h2>
//             <p className="subtitle">
//               You can ask your query here by submitting the detail in the form
//             </p>
//             <ul className="social-list">
//               <li><a aria-label="Facebook"><Facebook size={20} /></a></li>
//               <li><a aria-label="Twitter"><Twitter size={20} /></a></li>
//               <li><a aria-label="Instagram"><Instagram size={20} /></a></li>
//               <li><a aria-label="Pinterest"><FaPinterest size={20} /></a></li>
//             </ul>
//           </div>
//           {/* ← LEFT: the form */}
//           <form className="contact-form">
//             <div className="field-pair">
//               <input type="text" name="name" placeholder="Your Name" required />
//               <input type="email" name="email" placeholder="Your Email" required />
//             </div>
//             <div className="field-pair">
//               <input type="tel" name="phone" placeholder="Your Phone" />
//               <input type="text" name="subject" placeholder="Subject" />
//             </div>
//             <textarea name="message" rows="5" placeholder="Your Message"></textarea>
//             <button type="submit" className="btn-submit">Send Message</button>
//           </form>

         
//         </section>
//       </main>

//       <Footer />
//     </div>
// );
// }




import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import '../style/ContactPage.css';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="contact-unique-page">
      <Header />

      {/* Hero */}
      <section className="contact-unique-hero">
        <div className="cu-container">
          <h1 className="cu-hero__title">Contact Us</h1>
          <nav className="cu-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Main */}
      <main className="cu-container contact-unique-main">
        {/* Info Column */}
        <div className="cu-info">
          <h2>Get In Touch</h2>
          <p>
            We’d love to hear from you. Whether you have a question about features,
            pricing, need a demo, or anything else—our team is ready to answer all
            your questions.
          </p>
          <ul className="cu-contact-details">
            <li><FaPhoneAlt /> <a href="tel:+18888291141">+1-888-829-1141</a></li>
            <li><FaEnvelope /> <a href="mailto:info@bookpremiumfare.com">info@bookpremiumfare.com/</a></li>
            <li><FaMapMarkerAlt /> 1820 Avenue M #491, Brooklyn, NY 11230</li>
          </ul>
          <div className="cu-social">
            <a aria-label="Facebook"><FaFacebookF /></a>
            <a aria-label="Twitter"><FaTwitter /></a>
            <a aria-label="Instagram"><FaInstagram /></a>
            <a aria-label="Pinterest"><FaPinterestP /></a>
          </div>
        </div>

        {/* Form Column */}
        <div className="cu-form-card">
          <h2>Send Us a Message</h2>
          <form className="cu-form">
            <div className="cu-form__row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="cu-form__row">
              <input type="tel" placeholder="Your Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

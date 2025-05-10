import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import '../style/PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'info-collection',
      title: 'Information We Collect',
      content: `We may collect the following types of information when you interact with our website or services:

- Personal Information: your name, email address, phone number, billing details, travel preferences, and any other information you provide when making bookings or contacting us.
- Non-Personal Information: browser type, IP address, device identifiers, operating system, and other technical data collected automatically through cookies and similar tracking technologies.
- Travel-Related Information: flight preferences, destinations, booking history, and itinerary details to facilitate and personalize your travel arrangements.`,
    },
    {
      id: 'how-collect',
      title: 'How We Collect Information',
      content: `We gather information in the following ways:

- Directly from You: when you complete booking forms, create an account, or communicate with us via email, phone, or chat.
- Automatically: through cookies, web beacons, and other tracking technologies when you visit BookPremiumFare.com.
- From Third Parties: travel partners, payment processors, or analytics services that assist us in delivering our services and improving our platform.`,
    },
    {
      id: 'how-use',
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

- Process and manage your travel bookings and reservations.
- Communicate with you about your bookings, account, promotions, or customer support inquiries.
- Enhance our website and services through analytics, performance monitoring, and user feedback.
- Personalize your experience by offering tailored travel recommendations and offers.
- Comply with legal obligations and protect against fraudulent activities.`,
    },
    {
      id: 'how-share',
      title: 'Information Sharing',
      content: `We may share your information with the following parties:

- Travel Partners: airlines, hotels, car rental companies, and other vendors needed to fulfill your travel arrangements.
- Service Providers: third-party vendors who assist with payment processing, customer support, analytics, and marketing communications.
- Legal Authorities: when required by law, regulation, or to protect the rights, safety, or property of BookPremiumFare.com or others.

We do not sell your personal information to third parties for marketing purposes without your explicit consent.`,
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      content: `We use cookies, web beacons, and similar technologies to:

- Maintain your session and preferences.
- Analyze website performance and usage patterns.
- Deliver personalized content and targeted marketing communications.

You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of our site.`,
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. Our website uses SSL/TLS encryption to safeguard data during transmission. However, no method of transmission over the internet is 100% secure.`,
    },
    {
      id: 'rights',
      title: 'Your Rights and Choices',
      content: `Depending on your jurisdiction, you may have the right to:

- Access, correct, or delete your personal information.
- Opt out of marketing communications at any time.
- Request information about how we process and share your data.

To exercise these rights, please contact us at privacy@bookpremiumfare.com.`,
    },
    {
      id: 'third-party',
      title: 'Third-Party Links',
      content: `Our site may contain links to third-party websites and services. We are not responsible for their privacy practices or content. We recommend reviewing the privacy policies of any external sites you visit.`,
    },
    {
      id: 'children',
      title: "Children's Privacy",
      content: `BookPremiumFare.com is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will promptly delete it.`,
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      content: `Your information may be transferred to and processed in countries other than your own, including the United States, where data protection laws may differ. We implement safeguards to ensure your data remains protected.`,
    },
    {
      id: 'changes',
      title: 'Changes to This Privacy Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The "Last Updated" date at the top of this page indicates when this policy was most recently revised. Your continued use of our services constitutes acceptance of any changes.`,
    },
  ];

  return (
    <div className="privacy-page">
      <Header />

      {/* Hero / Breadcrumb */}
      <section className="privacy-page__hero">
        <div className="container">
          <h1 className="privacy-page__title">Privacy Policy</h1>
          <nav className="privacy-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-page__content">
        <div className="container">
          <p className="privacy-page__intro">
            Welcome to BookPremiumFare.com ("we," "us," or "our"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          {sections.map(({ id, title, content }) => (
            <article className="privacy-section" key={id} id={id}>
              <h2 className="privacy-section__title">{title}</h2>
              <p className="privacy-section__text">
                {content.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

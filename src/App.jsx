// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage           from './pages/HomePage';
import AirlinesPage       from './pages/AirlinesPage';
import AirlineDetailPage from './pages/AirlineDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import AboutUsPage          from './pages/AboutUsPage';
import DestinationDetailPage from './components/DestinationDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* your existing routes */}
        <Route path="/" element={<HomePage />} />

        {/* All Airlines listing */}
        <Route path="/airlines" element={<AirlinesPage />} />

        {/* Dynamic detail route */}
        <Route path="/airlines/:slug" element={<AirlineDetailPage />} />
         <Route path="/destination"       element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        
        <Route path="/about" element={<AboutUsPage/>}/>
         <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
           <Route path="/terms" element={<TermsConditionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/refund" element={<RefundPolicyPage />} />

        {/* catch-all 404 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

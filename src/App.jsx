import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link as RouterLink } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Quote from './pages/Quote';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <footer style={{ background: '#0A0A0A', borderTop: '1px solid #1A1A1A', color: 'white', padding: '120px 0 40px' }}>
        <div className="container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr repeat(3, 1fr)', gap: '80px', marginBottom: '100px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                <img src="/logo_icon.png" alt="FOTACARGO" style={{ height: '80px', filter: 'drop-shadow(0 0 15px rgba(145, 85, 253, 0.5)) brightness(1.2)' }} />
              </div>
              <p style={{ color: '#AAA', fontSize: '1.15rem', maxWidth: '300px', marginBottom: '45px', lineHeight: 1.6, fontWeight: 500 }}>
                Let's start something shipping, your goods! Professional handling and global reach since 2008.
              </p>
              <RouterLink to="/quote" className="btn btn-primary" style={{ padding: '20px 48px', borderRadius: '14px', fontSize: '1.1rem', fontWeight: 900, boxShadow: '0 10px 25px rgba(145, 85, 253, 0.3)' }}>
                Get a Quote
              </RouterLink>
            </div>
            <div>
              <h4 style={{ marginBottom: '32px', fontSize: '1.25rem', fontWeight: 800 }}>Company</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#AAA', fontSize: '1.05rem', fontWeight: 500 }}>
                <li><RouterLink to="/" style={{ transition: 'color 0.3s ease' }}>Home</RouterLink></li>
                <li><RouterLink to="/about" style={{ transition: 'color 0.3s ease' }}>About Us</RouterLink></li>
                <li><RouterLink to="/services" style={{ transition: 'color 0.3s ease' }}>Services</RouterLink></li>
                <li><RouterLink to="/quote" style={{ transition: 'color 0.3s ease' }}>Quote</RouterLink></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '32px', fontSize: '1.25rem', fontWeight: 800 }}>Helpful Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#AAA', fontSize: '1.05rem', fontWeight: 500 }}>
                <li><a href="#" style={{ transition: 'color 0.3s ease' }}>Privacy policy</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s ease' }}>Terms & conditions</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s ease' }}>Cookie Policy</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s ease' }}>Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '32px', fontSize: '1.25rem', fontWeight: 800 }}>Contact Info</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#AAA', fontSize: '1.05rem', fontWeight: 500 }}>
                <li style={{ lineHeight: 1.5 }}>14886 Falcon ave, S7E 2G<br />Chicago, IL 60667</li>
                <li style={{ color: 'var(--primary)', fontWeight: 700 }}>(723) 456-7890</li>
                <li style={{ color: 'var(--primary)', fontWeight: 700 }}>hello@fotacargo.com</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1A1A1A', paddingTop: '40px', textAlign: 'center', color: '#666', fontSize: '0.9rem', fontWeight: 500 }}>
            © {new Date().getFullYear()} Forta Cargo Ltd. All rights reserved.
          </div>
        </div>
        <style>{`
          footer a:hover {
            color: var(--primary) !important;
          }
          @media (max-width: 992px) {
            .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          }
          @media (max-width: 600px) {
            .footer-grid { grid-template-columns: 1fr !important; text-align: left; gap: 40px !important; }
            .footer-grid div { display: flex; flex-direction: column; align-items: flex-start; }
            .footer-grid ul { align-items: flex-start; }
            .footer-grid p { max-width: 100% !important; }
            footer { padding: 80px 0 40px !important; }
            [style*="textAlign: 'center'"] { text-align: left !important; }
            footer img { height: 60px !important; }
          }
        `}</style>
      </footer>
    </Router>
  );
}

export default App;

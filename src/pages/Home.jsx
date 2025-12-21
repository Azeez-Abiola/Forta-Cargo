import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Truck, Globe, Package, Ship, Shield, CheckCircle, ArrowDown, Award, MapPin, Clock, Zap, DollarSign, Search, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced Scroll Animation Wrapper (Sliding side-by-side)
const ScrollSection = ({ children, direction = "left", delay = 0 }) => {
  const xOffset = direction === "left" ? -120 : 120;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

// Simple Counter Component
const CountUp = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const cleanValue = value.replace(/[,+]/g, '');
      const end = parseInt(cleanValue);
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(start + (end - start) * progress);
        setCount(currentCount);

        if (frame === totalFrames) clearInterval(timer);
      }, 1000 / 60);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}{value.includes('+') ? '+' : ''}</span>;
};

// Animated Avatar Stack 
const AvatarStack = () => (
  <motion.div
    className="avatar-stack-container"
    style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
    whileHover="hover"
  >
    <div style={{ display: 'flex' }}>
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          variants={{
            hover: { marginLeft: '12px', scale: 1.15 }
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#EEE',
            border: '2.5px solid white',
            marginLeft: i === 1 ? 0 : '-18px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
      ))}
    </div>
    <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>
      <strong>24k+</strong> scannable partners
    </span>
  </motion.div>
);






// Responsive styles for Home page
if (typeof document !== 'undefined' && !document.head.querySelector('style[data-home-responsive]')) {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 992px) {
      h1 { font-size: 3.5rem !important; line-height: 1 !important; margin-bottom: 30px !important; letter-spacing: -2px !important; }
      h2 { font-size: 2.8rem !important; letter-spacing: -1px !important; }
      section { padding: 60px 0 !important; }
      .container > div, .container > .why-cards-grid, .container > .working-process-images {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
        flex-direction: column !important;
      }
      [style*="height: 700px"] { height: 400px !important; border-radius: 40px !important; }
      [style*="fontSize: 9rem"] { font-size: 3rem !important; letter-spacing: 15px !important; }
      [style*="padding: 90px 70px"] { padding: 50px 30px !important; border-radius: 40px !important; }
      [style*="fontSize: 4.2rem"] { font-size: 2.5rem !important; }
      [style*="fontSize: 5.5rem"] { font-size: 3rem !important; }
      [style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
      [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
      [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
      .about-page { padding-top: 120px !important; }
      .container { padding: 0 12px !important; }
    }
    @media (max-width: 600px) {
      h1 { font-size: 2.1rem !important; }
      h2 { font-size: 1.5rem !important; }
      .btn { width: 100%; text-align: center; font-size: 1rem !important; padding: 14px 0 !important; }
      [style*="display: flex; gap: 32px"], [style*="display: flex; gap: 48px"], [style*="display: flex; gap: 80px"] {
        flex-direction: column !important;
        gap: 12px !important;
      }
      [style*="padding: 45px 35px"], [style*="padding: 56px 48px"], [style*="padding: 56px"], [style*="padding: 120px 0"], [style*="padding: 140px 0"] {
        padding: 18px 8px !important;
      }
      [style*="fontSize: 4rem"] { font-size: 1.3rem !important; }
      [style*="borderRadius: 40px"] { border-radius: 18px !important; }
      [style*="height: 340px"] { height: 160px !important; }
      [style*="gap: 80px"] { gap: 12px !important; }
      [style*="grid-template-columns: 1fr 1.1fr"] { grid-template-columns: 1fr !important; }
    }
  `;
  style.setAttribute('data-home-responsive', 'true');
  document.head.appendChild(style);
}


const Home = () => {
  return (
    <div className="home-page" style={{ backgroundColor: '#FCF8F1' }}>
      {/* Cinematic Fullscreen Hero - Preserving v6 refined version */}
      <section className="hero" style={{
        position: 'relative',
        height: 'auto',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#000',
        boxSizing: 'border-box',
        padding: '150px 0 80px',
      }}>
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/src/assets/hero_plane.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.65
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '60px', paddingLeft: 0, paddingRight: 0, maxWidth: '100vw', boxSizing: 'border-box' }}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '1100px' }}
          >
            <div style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: 'rgba(145, 85, 253, 0.85)', backdropFilter: 'blur(10px)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.2)' }}>
              Elite Logistics Network
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 950, lineHeight: 1.1, margin: 0, color: 'white', letterSpacing: '-1px', marginBottom: '30px', textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              Reliable Cargo & Logistics Solutions<br /><span className="text-purple" style={{ color: 'var(--primary)', filter: 'brightness(1.5)' }}>Across Borders.</span>
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '30px', lineHeight: '1.4', fontWeight: 600, maxWidth: '95vw' }}>
              FOTACARGO engineers global connectivity with military-grade precision and real-time distribution intelligence.
            </p>

            <div className="hero-content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
              <Link to="/quote" className="btn btn-primary" style={{ padding: '16px 0', borderRadius: '24px', fontSize: '1rem', fontWeight: 900, boxShadow: '0 8px 20px rgba(145, 85, 253, 0.2)', width: '100%' }}>
                Get a Quote
              </Link>
              <AvatarStack />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            color: 'white',
            opacity: 0.8
          }}
        >
          <span style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px' }}>Explore</span>
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Why FOTACARGO (v5 Structure reversed back) - Slide Left */}
      <ScrollSection direction="left">
        <div className="container" style={{ padding: '120px 0', marginTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '4.8rem', fontWeight: 950, lineHeight: 0.95, marginBottom: '32px', letterSpacing: '-2px' }}>Why<br />FOTACARGO</h2>
            <p style={{ color: '#444', maxWidth: '600px', margin: '0 auto 48px', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500 }}>
              We orchestrate trade with precision and elite handling performance.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) 2fr', gap: '80px' }}>
            <div style={{ textAlign: 'center' }}>
              <Link to="/services" className="btn btn-primary" style={{ padding: '18px 48px', borderRadius: '16px' }}>
                Explore Services
              </Link>
            </div>

            <div className="why-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              {[
                { title: "Fast delivery", icon: <Zap />, text: "Next-gen routing algorithms ensure your cargo reaches its destination with zero latency." },
                { title: "Affordable rates", icon: <DollarSign />, text: "We engineer cost-efficient supply pipelines that slash your operational overhead." },
                { title: "Reliable tracking", icon: <Search />, text: "Real-time military-grade monitoring for total visibility of every cubic inch." },
                { title: "Professional handling", icon: <Headset />, text: "Elite coordination teams providing 24/7 technical oversight for high-value assets." }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -12,
                    rotate: i % 2 === 0 ? 3 : -3, // Dynamic Tilt
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    boxShadow: '0 30px 60px rgba(145, 85, 253, 0.45)'
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  style={{
                    padding: '56px 48px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '40px',
                    color: '#1A1A1A',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer',
                    border: '1px solid #EEE'
                  }}
                >
                  <div style={{ marginBottom: '36px', color: 'var(--primary)' }}>
                    {React.cloneElement(card.icon, { size: 52 })}
                  </div>
                  <h3 style={{ marginBottom: '18px', fontSize: '2rem', fontWeight: 900 }}>{card.title}</h3>
                  <p style={{ fontSize: '1.05rem', opacity: 0.75, marginBottom: '36px', lineHeight: 1.5 }}>
                    {card.text}
                  </p>
                  <div style={{ fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    LEARN MORE <ArrowRight size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Our Working Process (v5 Structure reversed back) - Dark Theme - Slide Right */}
      <section style={{ backgroundColor: '#000', color: 'white', padding: '120px 0' }}>
        <ScrollSection direction="right">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '80px', marginBottom: '100px' }}>
              <div className="working-process-images" style={{ display: 'flex', gap: '30px', flex: 1 }}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  style={{ width: '45%', height: '340px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                >
                  <img src="/src/assets/staff_warehouse_1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  style={{ width: '55%', height: '340px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                >
                  <img src="/src/assets/staff_warehouse_2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              </div>
              <div style={{ maxWidth: '550px' }}>
                <div style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'rgba(145, 85, 253, 0.1)', border: '1px solid var(--primary)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '32px' }}>
                  The Journey
                </div>
                <h2 style={{ fontSize: '4.2rem', fontWeight: 950, lineHeight: 1.05 }}>
                  Our process is engineered for <span style={{ color: 'var(--primary)' }}>precision logistics.</span>
                </h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px' }}>
              {[
                { id: "01", title: "Request a quote", desc: "Submit your logistics requirements via our intelligent quote portal." },
                { id: "02", title: "We confirm & price", desc: "Our strategists calculate optimal routes and provide elite pricing." },
                { id: "03", title: "Pickup & shipping", desc: "Military-grade coordination of cargo collection and transit startup." },
                { id: "04", title: "Delivery", desc: "Final destination fulfillment with scannable verification protocols." }
              ].map((step, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 950, color: 'var(--primary)', opacity: 0.6, marginBottom: '24px' }}>{step.id}</div>
                  <h4 style={{ fontSize: '1.65rem', fontWeight: 900, marginBottom: '18px' }}>{step.title}</h4>
                  <p style={{ color: '#AAA', fontSize: '1.05rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Reliable Logistic Solutions (v5 Structure reversed back) - Slide Left */}
      <ScrollSection direction="left">
        <div style={{ padding: '120px 0', backgroundColor: '#FCF8F1' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <h2 style={{ fontSize: '4.8rem', fontWeight: 950, letterSpacing: '-2px' }}>Reliable Logistic Solutions</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { title: "Elite Logistics Management", icon: <Shield /> },
                  { title: "Next-Gen Transportation", icon: <Truck /> },
                  { title: "Seamless Supply Chains", icon: <Globe /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      x: 12,
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}
                    style={{
                      padding: '48px',
                      backgroundColor: 'white',
                      borderRadius: '40px',
                      color: '#1A1A1A',
                      display: 'flex',
                      gap: '28px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid #EEE'
                    }}
                  >
                    <div style={{
                      padding: '20px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: '24px',
                      color: 'var(--primary)'
                    }}>
                      {React.cloneElement(item.icon, { size: 36 })}
                    </div>
                    <div>
                      <h3 style={{ marginBottom: '10px', fontSize: '1.75rem', fontWeight: 900 }}>{item.title}</h3>
                      <p style={{ fontSize: '1.05rem', opacity: 0.75, lineHeight: 1.5, fontWeight: 500 }}>Global infrastructure power for your distribution network.</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="solutions-visual" style={{ position: 'relative', height: '620px' }}>
                <div style={{ height: '100%', borderRadius: '50px', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
                  <img src="/src/assets/port_logistics.jpg" alt="FOTACARGO Logistics Hub" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(145, 85, 253, 0.25)' }}>
                    <h2 style={{ color: 'white', fontSize: '6rem', fontWeight: 950, letterSpacing: '12px', textShadow: '0 5px 25px rgba(0,0,0,0.5)' }}>FOTACARGO</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* On Time Delivery Section (v5 Structure reversed back) - Slide Right */}
      <ScrollSection direction="right">
        <div style={{ padding: '120px 0', backgroundColor: 'white' }}>
          <div className="container">
            <div style={{ marginBottom: '60px' }}>
              <div style={{ background: '#F9F9F9', padding: '100px 80px', borderRadius: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #EEE' }}>
                <div style={{ maxWidth: '550px' }}>
                  <div style={{ display: 'inline-block', padding: '10px 24px', backgroundColor: 'var(--accent)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '28px' }}>Performance</div>
                  <h3 style={{ fontSize: '4.2rem', fontWeight: 950, lineHeight: 1.1, marginBottom: '24px' }}>Proven On Time Delivery</h3>
                  <p style={{ color: 'var(--primary)', fontSize: '1.8rem', fontWeight: 900, marginBottom: '45px' }}>
                    <CountUp value="2,500" /> Deliveries Completed This Cycle
                  </p>
                  <div style={{ display: 'flex', gap: '48px' }}>
                    <div>
                      <h4 style={{ fontSize: '5.2rem', fontWeight: 950, color: '#111', margin: 0 }}>
                        <CountUp value="10,000+" />
                      </h4>
                      <p style={{ fontSize: '1.05rem', color: '#999', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Shipments</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  style={{ width: '450px', height: '340px', borderRadius: '45px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
                >
                  <img src="/src/assets/staff_delivery.jpg" alt="Courier Excellence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Are You Ready CTA - Typography Polish & Faded Visuals */}
      <ScrollSection direction="left">
        <div style={{ padding: '140px 0' }}>
          <div className="container">
            <div style={{
              backgroundColor: '#F7F3EB',
              borderRadius: '80px',
              padding: '160px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 50px 100px rgba(0,0,0,0.08)'
            }}>
              <div style={{ position: 'absolute', left: '80px', top: '50%', transform: 'translateY(-50%)', width: '320px', height: '460px', opacity: 0.35, zIndex: 1, filter: 'grayscale(0.5)' }}>
                <img src="/src/assets/staff_warehouse_1.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
              </div>
              <div style={{ position: 'absolute', right: '80px', top: '50%', transform: 'translateY(-50%)', width: '320px', height: '460px', opacity: 0.35, zIndex: 1, filter: 'grayscale(0.5)' }}>
                <img src="/src/assets/staff_delivery.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                style={{ position: 'relative', zIndex: 5 }}
              >
                <h2 style={{ fontSize: '3.8rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '56px', color: '#111', letterSpacing: '-1.5px' }}>
                  Ready to ship? Get your<br />quote in minutes.
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
                  <Link to="/quote" className="btn btn-primary" style={{ padding: '24px 72px', borderRadius: '24px', fontSize: '1.3rem', fontWeight: 900 }}>
                    Get a Quote
                  </Link>
                  <button className="btn btn-outline" style={{ border: '3.5px solid var(--primary)', color: 'var(--primary)', background: 'transparent', padding: '24px 72px', borderRadius: '24px', fontSize: '1.3rem', fontWeight: 900 }}>
                    Book Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollSection>
      <style>{`
        /* Prevent horizontal scroll ONLY on page wrapper */
        .home-page { overflow-x: hidden; width: 100%; }
        
        @media (max-width: 992px) {
            h1 { font-size: 3.5rem !important; line-height: 1 !important; margin-bottom: 30px !important; }
            h2 { font-size: 2.8rem !important; }
            p { font-size: 1.1rem !important; }
            section { padding: 60px 0 !important; }
            .container { padding: 0 20px !important; max-width: 100% !important; }
            
            /* Grid layouts */
            .container > div { grid-template-columns: 1fr !important; gap: 30px !important; }
            .why-cards-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
            .working-process-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
            
            /* Fix for Hero */
            .hero { height: auto !important; min-height: 100vh; padding: 120px 0 60px !important; }
            .hero h1 { font-size: 3.2rem !important; line-height: 1.1 !important; }
            .hero p { font-size: 1.1rem !important; }
            .hero-content-wrapper { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
            .avatar-stack-container { flex-direction: row !important; align-items: center !important; margin-top: 16px; }

            /* Working Process Images - HORIZONTAL */
            .working-process-images { 
                flex-direction: row !important; 
                gap: 12px !important; 
                height: 180px !important;
            }
            .working-process-images > div {
                width: 50% !important;
                height: 100% !important;
            }

            /* Adjust padding for mobile */
            [style*="padding: 64px"], [style*="padding: 72px"] { padding: 30px 20px !important; }
            [style*="padding: 90px"] { padding: 40px 20px !important; }
            [style*="padding: 100px 80px"] { padding: 50px 24px !important; }
            [style*="padding: 160px 40px"] { padding: 80px 24px !important; }
            
            /* Images */
            .solutions-visual { height: 320px !important; }
            [style*="height: 620px"], [style*="height: 700px"] { height: 300px !important; }
            [style*="height: 340px"] { height: 200px !important; }
            [style*="height: 460px"] { height: 300px !important; display: none; }
            
            /* CTA section */
            .cta-images { display: none !important; }
            [style*="left: 80px"], [style*="right: 80px"] { display: none !important; }
        }
        
        @media (max-width: 600px) {
            h1 { font-size: 2.5rem !important; }
            h2 { font-size: 2.2rem !important; }
            section { padding: 48px 0 !important; }
            .container { padding: 0 16px !important; }
            .hero h1 { font-size: 2.5rem !important; }
            .btn { width: 100%; text-align: center; padding: 18px 24px !important; }
            .avatar-stack-container { width: 100%; justify-content: flex-start; }
            .working-process-grid { grid-template-columns: 1fr !important; }
            [style*="fontSize: 4.8rem"], [style*="fontSize: 4.2rem"] { font-size: 2rem !important; }
        }
    `}</style>
    </div>
  );
};

export default Home;

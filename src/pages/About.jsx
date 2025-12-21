import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Users, Shield, Globe, Award, Briefcase, Zap } from 'lucide-react';
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
            style={{ width: '100%', overflow: 'hidden' }}
        >
            {children}
        </motion.div>
    );
};

const About = () => {
    return (
        <div className="about-page" style={{ paddingTop: '160px', backgroundColor: '#FCF8F1' }}>
            {/* Hero Section */}
            <section style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: 'var(--primary)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '40px', boxShadow: '0 8px 20px rgba(145, 85, 253, 0.2)' }}>
                                Who We Are
                            </div>
                            <h1 style={{ fontSize: '7.5rem', fontWeight: 950, lineHeight: 0.85, marginBottom: '45px', letterSpacing: '-5px' }}>
                                Moving the <span className="text-purple">World</span> Together
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: '#444', lineHeight: 1.6, marginBottom: '60px', fontWeight: 600 }}>
                                At FOTACARGO, we engineer global connectivity. our mission is to accelerate trade by providing the world's most intelligent logistics architecture.
                            </p>
                            <div style={{ display: 'flex', gap: '32px' }}>
                                <div style={{ padding: '45px 35px', backgroundColor: 'white', borderRadius: '40px', flex: 1, boxShadow: 'var(--shadow-sm)', border: '1px solid #EEE' }}>
                                    <h4 style={{ fontSize: '4rem', fontWeight: 950, color: 'var(--primary)', marginBottom: '12px' }}>15+</h4>
                                    <p style={{ fontSize: '1rem', color: '#888', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Years Experience</p>
                                </div>
                                <div style={{ padding: '45px 35px', backgroundColor: 'white', borderRadius: '40px', flex: 1, boxShadow: 'var(--shadow-sm)', border: '1px solid #EEE' }}>
                                    <h4 style={{ fontSize: '4rem', fontWeight: 950, color: 'var(--primary)', marginBottom: '12px' }}>200+</h4>
                                    <p style={{ fontSize: '1rem', color: '#888', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Strategic Hubs</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 80 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ position: 'relative', height: '700px', borderRadius: '60px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid white' }}
                        >
                            <img src="/src/assets/staff_warehouse_2.jpg" alt="FOTACARGO Operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(145, 85, 253, 0.15)' }}>
                                <h2 style={{ color: 'white', fontSize: '9rem', fontWeight: 950, opacity: 0.85, letterSpacing: '35px', mixBlendMode: 'overlay', pointerEvents: 'none' }}>PRECISION</h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section - Dark Themed & Slide Left */}
            <section style={{ padding: '140px 0', backgroundColor: '#111', color: 'white' }}>
                <div className="container">
                    <ScrollSection direction="left">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                            <motion.div
                                whileHover={{ y: -15, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'var(--primary)' }}
                                style={{ padding: '90px 70px', backgroundColor: '#1A1A1A', borderRadius: '55px', border: '1px solid #222' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '45px' }}>
                                    <Target size={85} strokeWidth={2.5} />
                                </div>
                                <h2 style={{ fontSize: '4.2rem', fontWeight: 950, marginBottom: '32px', letterSpacing: '-2px' }}>Our Mission</h2>
                                <p style={{ fontSize: '1.45rem', color: '#AAA', lineHeight: 1.6, fontWeight: 500 }}>
                                    To construct a seamless, Al-driven logistics network that empowers enterprises to dominate global markets through superior distribution speed.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -15 }}
                                style={{ padding: '90px 70px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '55px', boxShadow: '0 30px 60px rgba(145, 85, 253, 0.3)' }}
                            >
                                <div style={{ color: 'white', marginBottom: '45px' }}>
                                    <Eye size={85} strokeWidth={2.5} />
                                </div>
                                <h2 style={{ fontSize: '4.2rem', fontWeight: 950, marginBottom: '32px', letterSpacing: '-2px' }}>Our Vision</h2>
                                <p style={{ fontSize: '1.45rem', opacity: 0.9, lineHeight: 1.6, fontWeight: 500 }}>
                                    To remain the world's primary logistics architect, defining the future of transport through total reliability and frontier innovation.
                                </p>
                            </motion.div>
                        </div>
                    </ScrollSection>
                </div>
            </section>

            {/* Why Choose Us - Slide from Right */}
            <section style={{ padding: '140px 0' }}>
                <div className="container">
                    <ScrollSection direction="right">
                        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                            <h2 style={{ fontSize: '5.5rem', fontWeight: 950, letterSpacing: '-3px' }}>Why <span className="text-purple">Choose Us</span></h2>
                            <p style={{ maxWidth: '800px', margin: '0 auto', color: '#444', fontSize: '1.5rem', fontWeight: 600 }}>
                                We orchestrate global trade with military-grade precision and unmatched human expertise.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                            {[
                                { title: "Experience", icon: <Briefcase />, text: "Decades of deep industrial logistics intelligence across 150+ international lanes.", img: "/src/assets/hero_ship_aerial.jpg" },
                                { title: "Reliability", icon: <Shield />, text: "Total asset protection with 24/7 scannable monitoring and secure verified protocols.", img: "/src/assets/staff_warehouse_1.jpg" },
                                { title: "Customer-First", icon: <Users />, text: "Strategic coordination tailored to your specific commercial or industrial scale.", img: "/src/assets/port_logistics.jpg" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -15, boxShadow: 'var(--shadow-md)' }}
                                    style={{ backgroundColor: 'white', borderRadius: '55px', overflow: 'hidden', border: '1px solid #EEE' }}
                                >
                                    <div style={{ height: '280px', width: '100%' }}>
                                        <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '64px 52px', textAlign: 'center' }}>
                                        <div style={{ color: 'var(--primary)', marginBottom: '36px', display: 'flex', justifyContent: 'center' }}>
                                            {React.cloneElement(item.icon, { size: 64 })}
                                        </div>
                                        <h3 style={{ fontSize: '2.4rem', fontWeight: 950, marginBottom: '25px' }}>{item.title}</h3>
                                        <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1.2rem', fontWeight: 500 }}>{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollSection>
                </div>
            </section>

            {/* Final CTA - Slide from Left */}
            <section style={{ padding: '140px 0', backgroundColor: 'var(--secondary)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.15, zIndex: 0 }}>
                    <img src="/src/assets/staff_delivery.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <ScrollSection direction="left">
                        <div style={{ display: 'inline-block', marginBottom: '50px' }}>
                            <Award size={110} color="var(--primary)" />
                        </div>
                        <h2 style={{ fontSize: '5.5rem', fontWeight: 950, marginBottom: '45px', letterSpacing: '-3px' }}>Define Your Global Reach</h2>
                        <p style={{ fontSize: '1.6rem', opacity: 0.9, marginBottom: '70px', maxWidth: '900px', margin: '0 auto 70px', fontWeight: 600, lineHeight: 1.5 }}>
                            Join the matrix of elite enterprises powered by FOTACARGO logistics architecture.
                        </p>
                        <Link to="/quote" className="btn btn-primary" style={{ padding: '28px 90px', borderRadius: '24px', fontSize: '1.5rem', fontWeight: 900, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>Get a Quote</Link>
                    </ScrollSection>
                </div>
            </section>

            <style>{`
        /* Prevent horizontal scroll */
        .about-page { overflow-x: hidden; width: 100%; }
        .about-page section { overflow-x: hidden; width: 100%; }
        .about-page .container { overflow-x: hidden; }
        
        @media (max-width: 992px) {
            h1 { font-size: 3.5rem !important; line-height: 1 !important; margin-bottom: 30px !important; letter-spacing: -2px !important; }
            h2 { font-size: 2.8rem !important; letter-spacing: -1px !important; }
            p { font-size: 1.1rem !important; }
            section { padding: 60px 0 !important; }
            .container { padding: 0 20px !important; max-width: 100% !important; }
            .container > div { grid-template-columns: 1fr !important; gap: 30px !important; }
            [style*="height: 700px"] { height: 350px !important; border-radius: 30px !important; }
            [style*="fontSize: 9rem"] { font-size: 2.8rem !important; letter-spacing: 12px !important; }
            [style*="fontSize: 7.5rem"] { font-size: 3.2rem !important; }
            [style*="padding: 90px 70px"] { padding: 40px 24px !important; border-radius: 30px !important; }
            [style*="padding: 64px 52px"] { padding: 40px 28px !important; }
            [style*="fontSize: 4.2rem"] { font-size: 2.5rem !important; }
            [style*="fontSize: 5.5rem"] { font-size: 2.8rem !important; }
            [style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; gap: 30px !important; }
            .about-page { padding-top: 120px !important; }
        }
        @media (max-width: 600px) {
            h1 { font-size: 2.5rem !important; }
            h2 { font-size: 2rem !important; }
            section { padding: 48px 0 !important; }
            .container { padding: 0 16px !important; }
            .btn { width: 100%; text-align: center; padding: 18px 24px !important; }
            [style*="display: flex; gap: 32px"] { flex-direction: column !important; gap: 20px !important; }
            [style*="padding: 45px 35px"] { padding: 32px 20px !important; }
            [style*="fontSize: 4rem"] { font-size: 2.8rem !important; }
        }
      `}</style>
        </div>
    );
};

export default About;

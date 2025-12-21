import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Truck, Package, Anchor, Airplay, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
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

const services = [
    {
        icon: <Anchor />,
        name: "Cargo Shipping",
        desc: "Reliable sea freight services for international container shipping. We handle everything from port-to-port to door-to-door delivery.",
        included: ["Container tracking", "Customs clearance", "Port logistics"],
        regions: "Worldwide",
        image: "/src/assets/hero_ship_aerial.jpg"
    },
    {
        icon: <Airplay />,
        name: "Import & Export Logistics",
        desc: "Fast and secure air cargo solutions for urgent shipments. Ideal for high-value and time-sensitive goods.",
        included: ["Express shipping", "Fragile handling", "Airport-to-door"],
        regions: "International",
        image: "/src/assets/staff_warehouse_2.jpg"
    },
    {
        icon: <Truck />,
        name: "Local & International Delivery",
        desc: "Comprehensive road transport for local distribution and cross-border trucking within the continent.",
        included: ["Last-mile delivery", "Fleet tracking", "Secure loading"],
        regions: "Continental",
        image: "/src/assets/staff_delivery.jpg"
    },
    {
        icon: <Package />,
        name: "Bulk Goods Transportation",
        desc: "Specialized logistics for large-scale industrial and commercial goods. We manage large volumes with precision.",
        included: ["Heavy machinery", "Project cargo", "Oversized shipping"],
        regions: "Global",
        image: "/src/assets/port_logistics.jpg"
    },
    {
        icon: <Briefcase />,
        name: "Business Supply Logistics",
        desc: "Optimized supply chain management for businesses. We handle inventory, warehousing, and distribution.",
        included: ["Warehousing", "Inventory management", "Order fulfillment"],
        regions: "Nationwide",
        image: "/src/assets/staff_warehouse_1.jpg"
    }
];

const Services = () => {
    return (
        <div style={{ paddingTop: '160px', backgroundColor: '#FCF8F1' }}>
            <ScrollSection direction="left">
                <div className="container" style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <div style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: 'var(--primary)', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '32px', boxShadow: '0 8px 20px rgba(145, 85, 253, 0.2)' }}>
                        Our Solutions
                    </div>
                    <motion.h1
                        style={{ fontSize: '6rem', fontWeight: 950, marginBottom: '32px', lineHeight: 0.9, letterSpacing: '-4px' }}
                    >
                        Our <span className="text-purple">Logistics</span> Services
                    </motion.h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', color: '#444', fontSize: '1.45rem', lineHeight: 1.6, fontWeight: 600 }}>
                        FOTACARGO provides elite-tier logistics architectures designed for the modern global trade environment.
                    </p>
                </div>
            </ScrollSection>

            <section style={{ paddingBottom: '140px' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {services.map((service, index) => (
                        <ScrollSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                                    gap: '80px',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    padding: '72px',
                                    borderRadius: '60px',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: '1px solid #EEE',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        padding: '24px',
                                        background: 'rgba(145, 85, 253, 0.1)',
                                        borderRadius: '24px',
                                        color: 'var(--primary)',
                                        marginBottom: '36px',
                                        boxShadow: '0 10px 20px rgba(145, 85, 253, 0.1)'
                                    }}>
                                        {React.cloneElement(service.icon, { size: 56 })}
                                    </div>
                                    <h2 style={{ fontSize: '3.5rem', fontWeight: 950, marginBottom: '28px', lineHeight: 1.1, letterSpacing: '-2px' }}>{service.name}</h2>
                                    <p style={{ color: '#555', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '45px', fontWeight: 500 }}>{service.desc}</p>

                                    <div style={{ marginBottom: '50px' }}>
                                        <h4 style={{ marginBottom: '25px', fontWeight: 900, fontSize: '1.2rem', color: '#111' }}>Key Features:</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                            {service.included.map((item, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.1rem', color: '#444', fontWeight: 600 }}>
                                                    <CheckCircle size={20} color="var(--primary)" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ padding: '20px 32px', background: '#F8F8F8', borderRadius: '20px', display: 'inline-block', marginBottom: '45px', border: '1px solid #EEE' }}>
                                        <span style={{ fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Scope:</span> <span style={{ fontWeight: 700, marginLeft: '12px', fontSize: '1.1rem' }}>{service.regions}</span>
                                    </div>

                                    <div>
                                        <Link to="/quote" className="btn btn-primary" style={{ padding: '22px 56px', borderRadius: '18px', fontWeight: 900, fontSize: '1.2rem', boxShadow: '0 10px 25px rgba(145, 85, 253, 0.2)' }}>Get a Quote</Link>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        order: index % 2 === 0 ? 2 : 1,
                                        position: 'relative',
                                        height: '620px',
                                        borderRadius: '50px',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-md)',
                                        border: '1px solid #EEE'
                                    }}
                                >
                                    <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))', display: 'flex', alignItems: 'flex-end', padding: '56px' }}>
                                        <div style={{ textAlign: 'left' }}>
                                            <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '5px', marginBottom: '15px' }}>Global Network</h3>
                                            <div style={{ height: '5px', width: '100px', background: 'var(--primary)', borderRadius: '3px' }}></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollSection>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <ScrollSection direction="left">
                <section style={{ backgroundColor: '#111', color: 'white', padding: '140px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                        >
                            <h2 style={{ fontSize: '5rem', fontWeight: 950, marginBottom: '40px', letterSpacing: '-3px' }}>Scalable Infrastructure?</h2>
                            <p style={{ marginBottom: '64px', opacity: 0.8, fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 64px', fontWeight: 500, lineHeight: 1.5 }}>
                                Our engineering team constructs custom logistics pipelines tailored for your specific industrial or commercial scale.
                            </p>
                            <Link to="/quote" className="btn btn-primary" style={{ padding: '26px 80px', borderRadius: '24px', fontSize: '1.4rem', fontWeight: 900, boxShadow: '0 20px 40px rgba(145, 85, 253, 0.4)' }}>Get a Quote</Link>
                        </motion.div>
                    </div>
                </section>
            </ScrollSection>

            <style>{`
                /* Prevent horizontal scroll */
                .services-page, section { overflow-x: hidden; width: 100%; }
                .container { overflow-x: hidden; }
                
                @media (max-width: 992px) {
                    h1 { font-size: 3.5rem !important; margin-bottom: 24px !important; line-height: 1 !important; }
                    h2 { font-size: 2.5rem !important; line-height: 1.1 !important; }
                    p { font-size: 1.1rem !important; }
                    section { padding: 60px 0 !important; }
                    .container { padding: 0 20px !important; max-width: 100% !important; }
                    
                    /* Service cards - force single column */
                    .container > div > div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                        padding: 40px 32px !important;
                        border-radius: 40px !important;
                    }
                    
                    /* Reorder - image first, content second */
                    [style*="order: 2"], [style*="order: 1"] { 
                        order: 0 !important; 
                    }
                    
                    /* Image sizing */
                    [style*="height: 620px"] { 
                        height: 300px !important; 
                        border-radius: 30px !important;
                    }
                    
                    /* Padding adjustments */
                    [style*="padding: 72px"] { padding: 40px 32px !important; }
                    [style*="padding: 64px"] { padding: 32px !important; }
                    
                    /* Scope badge */
                    [style*="padding: 20px 32px"] { 
                        padding: 16px 24px !important; 
                        font-size: 0.85rem !important;
                    }
                }
                
                @media (max-width: 600px) {
                    h1 { font-size: 2.5rem !important; letter-spacing: -2px !important;  }
                    h2 { font-size: 2rem !important; letter-spacing: -1px !important; }
                    section { padding: 48px 0 !important; }
                    .container { padding: 0 16px !important; }
                    
                    /* Service cards */
                    .container > div > div[style*="grid-template-columns"] {
                        padding: 28px 20px !important;
                        border-radius: 30px !important;
                        gap: 24px !important;
                    }
                    
                    /* Image sizing on small screens */
                    [style*="height: 620px"], [style*="height: 300px"] { 
                        height: 220px !important; 
                        border-radius: 24px !important;
                    }
                    
                    /* Button full width */
                    .btn { 
                        width: 100%; 
                        text-align: center; 
                        padding: 18px 24px !important; 
                        font-size: 1.1rem !important;
                    }
                    
                    /* Key features grid - single column */
                    [style*="grid-template-columns: 1fr 1fr"] { 
                        grid-template-columns: 1fr !important; 
                        gap: 16px !important; 
                    }
                    
                    /* Padding adjustments */
                    [style*="padding: 72px"], [style*="padding: 40px 32px"] { 
                        padding: 28px 20px !important; 
                    }
                    
                    /* Image overlay text */
                    [style*="padding: 56px"] {
                        padding: 24px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Services;

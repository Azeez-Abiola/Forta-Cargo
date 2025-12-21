import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Globe, MapPin, Package, FileText, ArrowRight, ChevronDown } from 'lucide-react';

const Quote = () => {
    const [shipmentType, setShipmentType] = useState('international'); // international | domestic
    const [category, setCategory] = useState('package'); // package | document
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        originCountry: 'Nigeria',
        originState: '',
        originCity: '',
        destCountry: '',
        destState: '',
        destCity: '',
        weight: '',
        content: '',
        fullName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div style={{ paddingTop: '180px', minHeight: '80vh', backgroundColor: '#FCF8F1' }} className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        textAlign: 'center',
                        background: 'white',
                        padding: '100px 60px',
                        borderRadius: '60px',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid #EEE'
                    }}
                >
                    <div style={{ color: 'var(--primary)', marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ padding: '30px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}>
                            <CheckCircle size={80} />
                        </div>
                    </div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 950, marginBottom: '24px', letterSpacing: '-2px' }}>Request Received!</h1>
                    <p style={{ fontSize: '1.4rem', color: '#666', marginBottom: '56px', maxWidth: '600px', margin: '0 auto 56px', fontWeight: 500 }}>
                        Our logistics strategists are calculating the most efficient route and pricing for your shipment. We'll be in touch within 2 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn btn-primary" style={{ padding: '22px 64px', borderRadius: '24px', fontSize: '1.2rem', fontWeight: 900 }}>
                        Send Another Request
                    </button>
                </motion.div>
                <div style={{ height: '100px' }}></div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '160px', backgroundColor: '#FCF8F1', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h1 style={{ fontSize: '5.5rem', fontWeight: 950, letterSpacing: '-3px', marginBottom: '24px' }}>Get A <span className="text-purple">Quick Quote</span></h1>
                    <p style={{ fontSize: '1.4rem', color: '#555', fontWeight: 500 }}>Professional logistics pricing in minutes.</p>
                </div>

                <div style={{ background: 'white', borderRadius: '60px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid #EEE' }}>
                    {/* Toggles */}
                    <div style={{ display: 'flex', background: '#F9F9F9', borderBottom: '1px solid #EEE' }}>
                        <button
                            onClick={() => setShipmentType('international')}
                            style={{
                                flex: 1, padding: '32px', border: 'none', background: shipmentType === 'international' ? 'white' : 'transparent',
                                fontSize: '1.1rem', fontWeight: 800, color: shipmentType === 'international' ? 'var(--primary)' : '#888',
                                cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                            }}
                        >
                            <Globe size={24} /> International Shipment
                        </button>
                        <button
                            onClick={() => setShipmentType('domestic')}
                            style={{
                                flex: 1, padding: '32px', border: 'none', background: shipmentType === 'domestic' ? 'white' : 'transparent',
                                fontSize: '1.1rem', fontWeight: 800, color: shipmentType === 'domestic' ? 'var(--primary)' : '#888',
                                cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                                borderLeft: '1px solid #EEE'
                            }}
                        >
                            <MapPin size={24} /> Domestic Shipment
                        </button>
                    </div>

                    <div style={{ padding: '64px' }}>
                        {/* Category Selection */}
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
                            <button
                                onClick={() => setCategory('package')}
                                style={{
                                    padding: '18px 48px', borderRadius: '18px', border: '2px solid',
                                    borderColor: category === 'package' ? 'var(--primary)' : '#EEE',
                                    background: category === 'package' ? 'var(--primary)' : 'white',
                                    color: category === 'package' ? 'white' : '#555',
                                    fontWeight: 800, cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '12px'
                                }}
                            >
                                <Package size={20} /> Package
                            </button>
                            <button
                                onClick={() => setCategory('document')}
                                style={{
                                    padding: '18px 48px', borderRadius: '18px', border: '2px solid',
                                    borderColor: category === 'document' ? 'var(--primary)' : '#EEE',
                                    background: category === 'document' ? 'var(--primary)' : 'white',
                                    color: category === 'document' ? 'white' : '#555',
                                    fontWeight: 800, cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '12px'
                                }}
                            >
                                <FileText size={20} /> Document
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Origin & Destination Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
                                {/* Origin Block */}
                                <div style={{ background: '#FBFBFB', padding: '48px', borderRadius: '40px', border: '1px solid #EEE' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div> Origin
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <div>
                                            <label style={labelStyle}>Country</label>
                                            <div style={{ position: 'relative' }}>
                                                <input disabled={shipmentType === 'domestic'} name="originCountry" value={formData.originCountry} onChange={handleChange} style={inputStyle} />
                                                <ChevronDown size={20} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>State</label>
                                            <input name="originState" placeholder="Select State" value={formData.originState} onChange={handleChange} style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>City</label>
                                            <input name="originCity" placeholder="Select City" value={formData.originCity} onChange={handleChange} style={inputStyle} />
                                        </div>
                                    </div>
                                </div>

                                {/* Destination Block */}
                                <div style={{ background: '#FBFBFB', padding: '48px', borderRadius: '40px', border: '1px solid #EEE' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div> Destination
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <div>
                                            <label style={labelStyle}>Country</label>
                                            <div style={{ position: 'relative' }}>
                                                <input name="destCountry" placeholder="Choose Country" value={formData.destCountry} onChange={handleChange} style={inputStyle} />
                                                <ChevronDown size={20} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>State</label>
                                            <input name="destState" placeholder="Select State" value={formData.destState} onChange={handleChange} style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>City</label>
                                            <input name="destCity" placeholder="Select City" value={formData.destCity} onChange={handleChange} style={inputStyle} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Block */}
                            <div style={{ background: 'var(--accent)', padding: '56px', borderRadius: '45px', marginBottom: '60px' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '40px' }}>Shipment Details</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                                    <div>
                                        <label style={labelStyle}>Weight (kg)</label>
                                        <input name="weight" placeholder="e.g. 15.5" value={formData.weight} onChange={handleChange} style={inputStyle} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label style={labelStyle}>Content Description</label>
                                        <input name="content" placeholder="What are you shipping?" value={formData.content} onChange={handleChange} style={inputStyle} />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div style={{ background: 'white', padding: '56px', borderRadius: '45px', border: '1px solid #EEE', marginBottom: '60px' }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '40px' }}>Your Contact Details</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                                    <div>
                                        <label style={labelStyle}>Full Name</label>
                                        <input required name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email Address</label>
                                        <input required name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Phone Number</label>
                                        <input required name="phone" placeholder="+234 ..." value={formData.phone} onChange={handleChange} style={inputStyle} />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '32px', borderRadius: '24px', fontSize: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                CALCULATE QUOTE <ArrowRight size={24} />
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{ height: '140px' }}></div>
            </div>
            <style>{`
                /* Prevent horizontal scroll */\n                .quote-page, section { overflow-x: hidden; width: 100%; }
                .container { overflow-x: hidden; }
                
                @media (max-width: 992px) {
                    h1 { font-size: 3.5rem !important; line-height: 1 !important; margin-bottom: 30px !important; }
                    p { font-size: 1.1rem !important; }
                    section { padding: 60px 0 !important; }
                    .container { padding: 0 20px !important; max-width: 100% !important; }
                    [style*="padding: 64px"] { padding: 24px !important; }
                    [style*="padding: 56px"], [style*="padding: 48px"] { padding: 24px !important; }
                    [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 24px !important; }
                    [style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; gap: 20px !important; }
                    [style*="padding: 32px"] { padding: 16px 12px !important; font-size: 0.9rem !important; text-align: center; }
                    [style*="gap: 20px"] { flex-wrap: wrap; justify-content: center; gap: 12px !important; }
                    [style*="fontSize: 5.5rem"] { font-size: 3rem !important; }
                }
                @media (max-width: 600px) {
                    h1 { font-size: 2.5rem !important; }
                    section { padding: 48px 0 !important; }
                    .container { padding: 0 16px !important; }
                    [style*="padding: 32px"] { flex-direction: column !important; gap: 8px !important; }
                    [style*="borderLeft: 1px solid #EEE"] { border-left: none !important; border-top: 1px solid #EEE !important; }
                    [style*="padding: 18px 48px"] { width: 100%; justify-content: center; padding: 14px 20px !important; }
                    [style*="padding: 48px"], [style*="padding: 56px"] { padding: 20px 16px !important; }
                    .btn { width: 100%; text-align: center; padding: 18px 24px !important; }
                }
            `}</style>
        </div>
    );
};

const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#888',
    marginBottom: '12px'
};

const inputStyle = {
    width: '100%',
    padding: '20px 24px',
    borderRadius: '16px',
    border: '1.5px solid #EEE',
    background: 'white',
    fontSize: '1.1rem',
    fontWeight: 600,
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
};

export default Quote;
